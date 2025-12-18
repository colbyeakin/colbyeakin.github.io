"use client";

import React from "react";
import IntroCard from "../components/introCard";
import Skills from "../components/skills";
import ProjectsPreview from "../components/projectsPreview";
import Origins from "@/src/app/Origins/page";
import Innovation from "@/src/app/Innovation/page";
import Tomorrow from "@/src/app/Tomorrow/page";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  return (
    <main>
      <section id="launch" className="era relative w-full h-[60vh] flex flex-col items-center justify-center scroll-mt-32">

        {/* Neon Square Grid */}
        <div className="absolute inset-0 -z-10 tron-grid-neon grid grid-cols-20 grid-rows-10 gap-1">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="square" />
          ))}
        </div>

        {/* Launch Content */}
        <h1 className="era-title">Colby Eakin</h1>
        <h2 className="era-subtitle">Software Engineer & Experience Designer</h2>
        <p className="era-subtitle">
          Designing hopeful, human-centered systems through code and imagination.
        </p>
        <div className="mt-8">
        <motion.button 
          className="nav-link flex gap-8 px-6 py-3 backdrop-blur-md bg-bg-secondary/60 rounded-full border border-divider"
          whileHover={{ scale: 1.05 }}>
          <a href="#origins">Begin the Journey</a> 
        </motion.button>
        </div>
      </section>

      <section id="origins" className="era bg-bg-secondary">
        <h2 className="era-title">Origins Pavilion</h2>
        <p className="era-text">
          Every journey begins with curiosity - taking things apart, 
          asking why, and imagining what could be.
        </p>
        <Origins />
      </section>
      
      <section id="innovation" className="era scroll-mt-20">
        <h2 className="era-title">Innovation Hub</h2>
        <p className="era-text">
          A collection of experiments, prototypes, and systems designed
          to explore what's possbile when creativity meets technology.
        </p>
        <div className="py-4">
          <Innovation />
        </div>
      </section>

      <section id="tomorrow" className="era bg-bg-secondary scroll-mt-20">
        <Tomorrow />
      </section>
    </main>
  );
}

