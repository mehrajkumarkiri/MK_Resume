import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h4 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                AI-Powered CasaEstate
              </h4>
              <span className="glass-pill px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                TakeOver Hackathon
              </span>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-3">
              Smart Real Estate Intelligence &amp; Recommendation Platform
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Engineered a full-stack real estate discovery platform featuring intelligent property valuation and smart recommendation filtering. Built robust backend REST endpoints using Node.js/Express to handle dynamic listing queries, pricing algorithms, and client interactions with an intuitive, responsive frontend.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Node.js", "Express.js", "REST APIs", "JavaScript", "HTML5", "CSS3"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="CasaEstate Smart Real Estate Interface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Intelligent Valuation Model
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Architecture Exploration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Dynamic Listing Engine
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "ACTIVE",
      content: (
        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h4 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                Jarvis AI Assistant
              </h4>
              <span className="glass-pill px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                Personal Autonomous Agent
              </span>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-3">
              Cross-Platform Desktop &amp; Mobile Autonomous Agent
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Developing an intelligent voice and text-driven autonomous agent capable of executing complex desktop and mobile device workflows. Integrated natural language understanding (NLU), voice recognition, and real-time task execution routines for system-level controls and modular file manipulation microservices.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "NLP", "Speech Recognition", "OS Automation APIs", "Microservices"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Jarvis Autonomous Brain Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Autonomous Execution Core
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                  alt="Voice & NLU Processing Core"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    NLU &amp; System Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "FEB 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h4 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                VayuSwarm — Drone Swarms
              </h4>
              <span className="glass-pill px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                Makers Conclave
              </span>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-3">
              Hierarchical Multi-Agent AI System &amp; Telemetry
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Architected a hierarchical multi-agent AI system enabling distributed coordination and autonomous task allocation across drone nodes. Implemented structured communication protocols and fault-tolerant state machines for low-latency telemetry synchronization.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Multi-Agent AI Systems", "Robotics Architecture", "Telemetry Sync", "State Machines"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
                  alt="Drone Swarm Telemetry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Distributed Coordination
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80"
                  alt="Low-Latency Telemetry Control"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Telemetry Sync Engine
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "JAN 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h4 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                UIDAI Demographic Analytics
              </h4>
              <span className="glass-pill px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                National Data Hackathon
              </span>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-3">
              National-Scale Pipeline &amp; Anomaly Detection Engine
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Constructed end-to-end data processing pipelines using Pandas to clean, aggregate, and evaluate large-scale demographic datasets. Formulated exploratory data models and visual distribution charts to identify anomalies and extract actionable insights.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Pandas", "NumPy", "EDA", "Google Colab", "Data Pipelines"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Demographic Data Visualization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Large-Scale Processing
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Demographic Distribution Analytics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Anomaly Detection Models
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "APR 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl glass-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h4 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight">
                Sentinel-Ops Suite
              </h4>
              <span className="glass-pill px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest text-black uppercase">
                Team Lead (4 Members)
              </span>
            </div>
            <p className="text-sm font-bold text-neutral-600 uppercase tracking-wider mb-3">
              Centralized Operational Monitoring &amp; Architecture Partitioning
            </p>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Led the technical design and modular service partitioning for a centralized real-time operational monitoring dashboard. Documented complete architecture blueprints and operational lifecycle strategies for stakeholders and evaluation panels.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Full-Stack", "Python", "Modular Architecture", "Real-Time Telemetry", "Technical Leadership"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Infrastructure Monitoring Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Infrastructure Telemetry
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/10 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Operational Lifecycle Strategies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-bold uppercase tracking-wider">
                    Architecture Blueprints
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={data}
        title="ENGINEERING TRACK RECORD."
        description="A chronology of AI systems, autonomous architectures, and hackathon platforms developed by Mehraj Kumarkiri."
      />
    </div>
  );
}
export default TimelineDemo;
