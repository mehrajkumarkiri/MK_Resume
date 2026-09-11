"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top subtle location tracking tag matching image */}
        <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.35em] text-neutral-500 uppercase mb-8">
          MEHRAJ KUMARKIRI &nbsp;&bull;&nbsp; HYDERABAD, INDIA
        </div>

        {/* Huge bold headline matching image */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black tracking-tighter text-black uppercase leading-[0.95] mb-8">
          CODE SMARTER.
          <br />
          BUILD AUTONOMOUS.
          <br />
          SCALE INTELLIGENCE.
        </h1>

        {/* Subtitle paragraph matching image */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Autonomous agents that execute complex workflows. Multi-agent drone swarms engineered for low-latency telemetry. Scalable MERN &amp; Python architectures built for performance.
        </p>

        {/* Buttons matching image */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-102 active:scale-98"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#timeline"
            className="inline-flex items-center px-8 py-4 rounded-full glass-pill hover:bg-white text-neutral-900 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-all hover:scale-102 active:scale-98"
          >
            Explore My Work
          </a>
        </div>

        {/* Response commitment line matching image bottom */}
        <p className="text-xs sm:text-sm text-neutral-600 font-medium">
          Tell me what you&apos;re building. I&apos;ll get back within 24 hours.{" "}
          <a
            href="mailto:kumarkirimehraj05@gmail.com"
            className="font-bold text-black underline underline-offset-4 hover:text-neutral-700"
          >
            Book a 20&ndash;minute call
          </a>
        </p>

        {/* Key Metrics Glass Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-10 border-t border-black/[0.06]">
          <div className="p-6 rounded-2xl glass-card">
            <div className="text-3xl sm:text-4xl font-black text-black">
              9.2 / 10
            </div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
              B.Tech CGPA (1st Year)
            </div>
          </div>
          <div className="p-6 rounded-2xl glass-card">
            <div className="text-3xl sm:text-4xl font-black text-black">
              5+
            </div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
              Autonomous Systems
            </div>
          </div>
          <div className="p-6 rounded-2xl glass-card">
            <div className="text-3xl sm:text-4xl font-black text-black">
              3
            </div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
              National Hackathons
            </div>
          </div>
          <div className="p-6 rounded-2xl glass-card">
            <div className="text-3xl sm:text-4xl font-black text-black">
              4-Member
            </div>
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
              Engineering Team Lead
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
