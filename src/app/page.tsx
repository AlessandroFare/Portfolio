"use client";

import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <ProjectsShowcase />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </PageTransition>
  );
} 