"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const { t } = useLanguage();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const dragEndHandler = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
    if (index === currentIndex) {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Image Container */}
      <motion.div 
        className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Loading Indicator */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900"
            >
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                <span className="text-sm text-gray-500">{t.gallery.loading}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && !isLoading && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
                       bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors
                       md:opacity-0 md:group-hover:opacity-100"
              onClick={() => paginate(-1)}
              aria-label={t.gallery.prevImage}
            >
              <svg 
                width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2"
                className="text-white"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
                       bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors
                       md:opacity-0 md:group-hover:opacity-100"
              onClick={() => paginate(1)}
              aria-label={t.gallery.nextImage}
            >
              <svg 
                width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" strokeWidth="2"
                className="text-white"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && !isLoading && (
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full 
                         bg-black/50 backdrop-blur-md text-white text-sm">
            {t.gallery.imageCounter
              .replace('{current}', String(currentIndex + 1))
              .replace('{total}', String(images.length))}
          </div>
        )}

        {/* Image with Animation */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing group"
            onClick={() => !isLoading && setIsModalOpen(true)}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className={`object-cover transition-opacity duration-300 
                         ${loadedImages.has(currentIndex) ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => handleImageLoad(currentIndex)}
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 snap-x 
                       scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
                       scrollbar-track-transparent">
          {images.map((image, index) => (
            <motion.button
              key={image}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden 
                         ${index === currentIndex ? 'ring-2 ring-blue-500' : ''}
                         ${loadedImages.has(index) ? 'bg-gray-100 dark:bg-gray-900' : 'animate-pulse bg-gray-200 dark:bg-gray-800'}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              aria-label={`${t.gallery.imageCounter
                .replace('{current}', String(index + 1))
                .replace('{total}', String(images.length))}`}
            >
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 
                           ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                onLoadingComplete={() => handleImageLoad(index)}
                loading="lazy"
                sizes="96px"
              />
            </motion.button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl mx-auto p-4"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Full size ${currentIndex + 1}`}
                width={1920}
                height={1080}
                className="object-contain max-h-[90vh]"
              />
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsModalOpen(false)}
                aria-label={t.gallery.close}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 