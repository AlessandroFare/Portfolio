"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

export default function SnakeGame() {
  const { t } = useLanguage();
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const directionRef = useRef(direction);
  const foodRef = useRef(food);
  const gameLoopRef = useRef<NodeJS.Timeout>();

  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    // Evita di generare cibo sulla posizione del serpente
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (gameOver) return;

    const keyDirections: { [key: string]: Direction } = {
      ArrowUp: 'UP',
      ArrowDown: 'DOWN',
      ArrowLeft: 'LEFT',
      ArrowRight: 'RIGHT',
      w: 'UP',
      s: 'DOWN',
      a: 'LEFT',
      d: 'RIGHT'
    };

    const newDirection = keyDirections[e.key];
    if (!newDirection) return;

    // Previeni il movimento nella direzione opposta
    const opposites = {
      UP: 'DOWN',
      DOWN: 'UP',
      LEFT: 'RIGHT',
      RIGHT: 'LEFT'
    };

    if (opposites[newDirection] !== directionRef.current) {
      directionRef.current = newDirection;
      setDirection(newDirection);
    }
  };

  const moveSnake = () => {
    if (gameOver || isPaused) return;

    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };

      switch (directionRef.current) {
        case 'UP':
          head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case 'DOWN':
          head.y = (head.y + 1) % GRID_SIZE;
          break;
        case 'LEFT':
          head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case 'RIGHT':
          head.x = (head.x + 1) % GRID_SIZE;
          break;
      }

      // Controlla collisione con se stesso
      if (prevSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      // Crea il nuovo serpente
      const newSnake = [...prevSnake];
      newSnake.unshift(head); // Aggiungi la nuova testa all'inizio

      // Controlla se il serpente ha mangiato il cibo
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore(prev => prev + 1);
        const newFood = generateFood();
        foodRef.current = newFood;
        setFood(newFood);
      } else {
        newSnake.pop(); // Rimuovi l'ultima parte solo se non ha mangiato
      }

      return newSnake;
    });
  };

  const resetGame = () => {
    const initialFood = { x: 15, y: 15 };
    setSnake([{ x: 10, y: 10 }]);
    setFood(initialFood);
    foodRef.current = initialFood;
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (!isPaused && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPaused, gameOver]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative bg-gray-900 p-4 rounded-xl shadow-2xl"
    >
      <div className="mb-4 flex justify-between items-center">
        <span className="text-white">{t.easterEgg.score}: {score}</span>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div 
        className="relative bg-gray-800 rounded-lg overflow-hidden"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE
        }}
      >
        {/* Snake */}
        {snake.map((segment, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500"
            initial={false}
            animate={{
              x: segment.x * CELL_SIZE,
              y: segment.y * CELL_SIZE
            }}
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              borderRadius: i === 0 ? '4px' : '2px'
            }}
          />
        ))}

        {/* Food */}
        <motion.div
          className="absolute bg-red-500"
          initial={false}
          animate={{
            x: food.x * CELL_SIZE,
            y: food.y * CELL_SIZE
          }}
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Game Over Overlay */}
      {gameOver && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-xl">
          <h3 className="text-2xl text-white mb-4">{t.easterEgg.gameOver}</h3>
          <p className="text-xl text-white mb-6">{t.easterEgg.score}: {score}</p>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {t.easterEgg.restart}
          </button>
        </div>
      )}
    </motion.div>
  );
} 