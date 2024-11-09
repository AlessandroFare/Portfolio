"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Controlla se è la prima visita
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      // Se è la prima visita, mostra il loader e imposta il flag
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 3000); // Ridotto a 3 secondi per non essere troppo lungo
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <PageTransition>
        <main>
          <Hero />
          <ProjectsShowcase />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
} 