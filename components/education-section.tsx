"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  Users,
  GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  const educationList = [
    {
      institution: "NIAT x Malla Reddy Vishwavidhyapeeth",
      degree: "Undergraduate Program in Computer Science & Advanced Technologies",
      location: "Hyderabad, India",
      period: "2025 - 2029 (Expected)",
      score: "CGPA: 9.2 / 10 (1st Year)",
      badge: "Current Degree",
      highlights: [
        "Specialized in Artificial Intelligence, Autonomous Systems, and Algorithms",
        "Top academic tier with 9.2 First-Year cumulative grade point average",
        "Active team lead in university technical fests and hackathon delegations",
      ],
    },
    {
      institution: "K.K.B. College",
      degree: "Higher Secondary Certificate (HSC - 12th)",
      location: "Maharashtra, India",
      period: "Completed",
      score: "Percentage: 60.0%",
      badge: "Higher Secondary",
      highlights: [
        "Concentration in Science and Mathematics foundation",
        "Participated in STEM workshops and programming fundamentals",
      ],
    },
    {
      institution: "Podar International School",
      degree: "Secondary School Certificate (CBSE - 10th)",
      location: "Latur, Maharashtra",
      period: "Completed",
      score: "Percentage: 92.4%",
      badge: "Distinction",
      highlights: [
        "Achieved 92.4% with distinction in CBSE Board examinations",
        "Awarded academic excellence honors and science Olympiad participation",
      ],
    },
  ];

  const leadershipList = [
    {
      title: "National Hackathon Competitor",
      desc: "Active builder in national & university competitions including TakeOver Hackathon, UIDAI National Data Hackathon, and Makers Conclave.",
      icon: <Award className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "Cross-Functional Technical Leadership",
      desc: "Experienced leading multi-member engineering teams (e.g. Sentinel-Ops 4-member team) with structured Git workflows, code reviews, and modular architectures.",
      icon: <Users className="w-5 h-5 text-indigo-500" />,
    },
    {
      title: "Version Control & Documentation",
      desc: "Adherence to clean branching, semantic commits, automated pipelines, and comprehensive technical blueprints for stakeholder evaluations.",
      icon: <GitBranch className="w-5 h-5 text-pink-500" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-neutral-50/50 dark:bg-neutral-950/70 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Academic Foundation
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-8">
              Education & Academic Excellence
            </h2>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-purple-500/40 transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <Badge variant="accent">{edu.badge}</Badge>
                  </div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                      {edu.score}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Track Record Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              Leadership Record
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-8">
              Competitive & Leadership Impact
            </h2>

            <div className="space-y-4">
              {leadershipList.map((lead, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      {lead.icon}
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base">
                      {lead.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pl-11">
                    {lead.desc}
                  </p>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 text-neutral-900 dark:text-white mt-6">
                <h4 className="font-bold text-base mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  Fast Facts
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Competed at national hackathon tiers in high school and freshman collegiate year, maintaining an elite 9.2 CGPA while leading software development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
