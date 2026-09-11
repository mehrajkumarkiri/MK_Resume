"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "glass-nav shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-white/60 backdrop-blur-sm border-b border-black/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-neutral-800 uppercase">
          <a href="#about" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#timeline" className="hover:text-black transition-colors">
            Work
          </a>
          <a href="#skills" className="hover:text-black transition-colors">
            Skills
          </a>
        </nav>

        {/* Center Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group text-neutral-950"
        >
          {/* Geometric logo icon similar to the screenshot */}
          <div className="w-8 h-8 flex items-center justify-center font-black text-lg tracking-tighter">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 stroke-black stroke-[3]"
            >
              <path d="M4 8L10 24L16 12L22 24L28 8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-extrabold text-base tracking-[0.2em] uppercase font-sans">
            MEHRAJ KUMARKIRI
          </span>
        </Link>

        {/* Right Nav & CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-xs font-bold tracking-widest text-neutral-800 uppercase">
            <a href="#education" className="hover:text-black transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mehrajkumarkiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-102 active:scale-98"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider"
          >
            Contact
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden glass-card border-b border-black/[0.08] px-6 py-6 space-y-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-bold tracking-widest uppercase text-neutral-800"
          >
            About
          </a>
          <a
            href="#timeline"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-bold tracking-widest uppercase text-neutral-800"
          >
            Work & Projects
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-bold tracking-widest uppercase text-neutral-800"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-bold tracking-widest uppercase text-neutral-800"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-xs font-bold tracking-widest uppercase text-neutral-800"
          >
            Contact
          </a>
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://github.com/mehrajkumarkiri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-100 text-neutral-800"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-neutral-100 text-neutral-800"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
