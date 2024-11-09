"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CareerTimeline from "@/components/CareerTimeline";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import DownloadSection from '@/components/DownloadSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 3000);
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
          <CareerTimeline />
          <Experience />
          <DownloadSection />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
} 