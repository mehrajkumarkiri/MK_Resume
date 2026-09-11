"use client";

import React from "react";
import {
  Code2,
  Server,
  Brain,
  Database,
  Cpu,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  gradient: string;
}

export function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-5 h-5 text-purple-500" />,
      description: "Low-level system efficiency and modern dynamic scripting",
      skills: ["C++", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
      gradient: "from-purple-500/20 to-indigo-500/10",
    },
    {
      title: "Web & Backend Architecture",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      description: "Full-stack scalable MERN platforms and RESTful API ecosystems",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MERN Stack",
        "Microservices",
      ],
      gradient: "from-indigo-500/20 to-blue-500/10",
    },
    {
      title: "Data Science & AI Systems",
      icon: <Brain className="w-5 h-5 text-pink-500" />,
      description: "Data intelligence, NLU algorithms, and distributed agents",
      skills: [
        "Natural Language Processing (NLP)",
        "Pandas",
        "NumPy",
        "Exploratory Data Analysis (EDA)",
        "Google Colab",
        "Linux/Bash",
      ],
      gradient: "from-pink-500/20 to-purple-500/10",
    },
    {
      title: "Databases & Engineering Tools",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      description: "Relational/NoSQL datastores and DevOps version pipelines",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Git",
        "GitHub",
        "System Architecture Modeling",
        "Telemetry APIs",
      ],
      gradient: "from-emerald-500/20 to-teal-500/10",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Skills & Specialized Domains
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Equipped with end-to-end technical capabilities spanning system programming, autonomous AI logic, real-time telemetry, and resilient web infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/80 shadow-xs hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
