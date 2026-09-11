"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  BrainCircuit,
  Bot,
  Mail,
  FileDown,
  Award,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-50/50 dark:bg-neutral-950"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 dark:bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/25 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for AI Engineering & Autonomous Systems Projects</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Mehraj Kumarkiri
            </span>
          </h1>

          {/* Subtitle / Positioning */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 mb-6 max-w-3xl">
            AI Engineer & Full-Stack Developer specializing in{" "}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">
              Autonomous Agents
            </span>
            ,{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              Multi-Agent AI Swarms
            </span>
            , and scalable MERN platforms.
          </p>

          {/* Resume Snapshot Bio */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl leading-relaxed">
            Computer Science undergraduate at{" "}
            <strong className="text-neutral-900 dark:text-neutral-200">
              NIAT x Malla Reddy Vishwavidhyapeeth
            </strong>{" "}
            (1st Year CGPA:{" "}
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              9.2 / 10
            </span>
            ). Proven track record in national hackathons (TakeOver, UIDAI, Makers Conclave), building autonomous desktop agents, telemetry pipelines, and high-impact machine learning engines.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#timeline">
              <Button variant="glow" size="lg" className="gap-2">
                View Engineering Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </a>
            <a
              href="https://github.com/mehrajkumarkiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="gap-2">
                <GithubIcon className="w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg" className="gap-2">
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                9.2 / 10
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                B.Tech CGPA (1st Year)
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                5+
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                AI & Systems Projects
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-pink-600 dark:text-pink-400">
                3
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                National Hackathons
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                4-Member
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                Engineering Team Lead
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
