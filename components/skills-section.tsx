"use client";

import React from "react";
import {
  Code2,
  Server,
  Brain,
  Database,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

export function SkillsSection() {
  const categories: SkillCategory[] = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-5 h-5 text-black" />,
      description: "Low-level system efficiency and modern dynamic scripting",
      skills: ["C++", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Web & Backend Architecture",
      icon: <Server className="w-5 h-5 text-black" />,
      description: "Scalable MERN platforms, RESTful APIs & microservices",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MERN Stack",
        "Microservices",
      ],
    },
    {
      title: "Data Science & AI Systems",
      icon: <Brain className="w-5 h-5 text-black" />,
      description: "Natural language understanding & distributed autonomous systems",
      skills: [
        "Natural Language Processing (NLP)",
        "Pandas",
        "NumPy",
        "Exploratory Data Analysis (EDA)",
        "Google Colab",
        "Linux/Bash",
      ],
    },
    {
      title: "Databases & DevOps Tools",
      icon: <Database className="w-5 h-5 text-black" />,
      description: "Relational/NoSQL datastores and structured Git version control",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Git",
        "GitHub",
        "System Architecture Modeling",
        "Telemetry APIs",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-16">
        <div className="text-[11px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase mb-3">
          TECHNICAL CAPABILITIES
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase mb-4">
          SKILLS &amp; STACK.
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Full-stack systems and machine learning capabilities honed across autonomous agents, hackathons, and production-grade architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl glass-card hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-black uppercase tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-neutral-100 hover:bg-black hover:text-white border border-neutral-200 text-neutral-800 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
