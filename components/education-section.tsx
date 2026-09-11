"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export function EducationSection() {
  const educationList = [
    {
      institution: "NIAT x Malla Reddy Vishwavidhyapeeth",
      degree: "Undergraduate Program in Computer Science & Advanced Technologies",
      location: "Hyderabad, India",
      period: "2025 - 2029 (Expected)",
      score: "CGPA: 9.2 / 10",
      badge: "Current Degree",
      highlights: [
        "Specialized in Artificial Intelligence, Autonomous Systems, and Algorithms",
        "Top academic tier with 9.2 First-Year cumulative grade point average",
        "Active team lead in university technical fests and hackathon delegations",
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
        "Science and Mathematics academic honors",
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
        "STEM foundation and programming fundamentals",
      ],
    },
  ];

  const leadershipList = [
    {
      title: "National Hackathon Competitor",
      desc: "Active builder in national & university competitions including TakeOver Hackathon, UIDAI National Data Hackathon, and Makers Conclave.",
    },
    {
      title: "Technical Leadership (Sentinel-Ops)",
      desc: "Experienced leading a 4-member cross-functional engineering team with structured Git workflows, code reviews, and modular microservice blueprints.",
    },
    {
      title: "Architectural Documentation & Telemetry",
      desc: "Architected complete operational lifecycle strategies and state machine protocols for stakeholders and evaluation panels.",
    },
  ];

  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-16">
        <div className="text-[11px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase mb-3">
          ACADEMIC EXCELLENCE &amp; LEADERSHIP
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase mb-4">
          EDUCATION &amp; IMPACT.
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Consistent distinction, competitive hackathon participation, and technical leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Column */}
        <div className="lg:col-span-7 space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-black text-black uppercase tracking-tight">
                  {edu.institution}
                </h3>
                <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                  {edu.score}
                </span>
              </div>
              <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-4">
                {edu.degree}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-2 text-xs text-neutral-700">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Leadership Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl glass-card space-y-6">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-2">
              Competitive Track Record
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Proven ability to lead technical teams, deliver complex AI architectures under hackathon timeframes, and present to national panels.
            </p>

            <div className="space-y-6 pt-2">
              {leadershipList.map((lead, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-black shrink-0" />
                    <h4 className="font-extrabold text-sm text-black uppercase tracking-wider">
                      {lead.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-6">
                    {lead.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-black text-white mt-6 shadow-md">
              <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-1">
                FIRST-YEAR HIGHLIGHT
              </div>
              <p className="text-sm font-bold leading-relaxed">
                Maintained 9.2 CGPA at NIAT while simultaneously architecting autonomous drone swarms and participating in 3 national competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
