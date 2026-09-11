"use client";

import React from "react";
import { Sparkles, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="py-12 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-purple-600/20 text-purple-400 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-neutral-900 dark:text-white">
            Mehraj Kumarkiri
          </span>
          <span className="text-xs text-neutral-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mehrajkumarkiri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:kumarkirimehraj05@gmail.com"
            className="hover:text-purple-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
