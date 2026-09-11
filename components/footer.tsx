"use client";

import React from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="py-12 border-t border-black/[0.06] bg-white/70 backdrop-blur-md text-neutral-600 text-xs font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-extrabold tracking-widest text-black uppercase">
            MEHRAJ KUMARKIRI
          </span>
          <span className="text-neutral-400">&bull;</span>
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/mehrajkumarkiri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kumarkirimehraj05@gmail.com"
            className="hover:text-black transition-colors"
          >
            kumarkirimehraj05@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
