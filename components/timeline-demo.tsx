import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Cpu,
  Layers,
  BarChart3,
  Bot,
} from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                AI-Powered CasaEstate
              </h4>
              <Badge variant="accent">TakeOver Hackathon 2026</Badge>
            </div>
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
              Smart Real Estate Intelligence & Valuation Platform
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              Engineered a full-stack real estate discovery platform featuring intelligent property valuation and smart recommendation filtering. Built robust backend REST endpoints using Node.js/Express to handle dynamic listing queries, pricing algorithms, and client interactions with a responsive, modern frontend dashboard.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Node.js", "Express.js", "REST APIs", "JavaScript", "HTML5", "CSS3"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                  alt="CasaEstate Smart Real Estate Interface"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Smart Property Valuation View</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Architecture Exploration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Dynamic Listing & Filter Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Active Build",
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-indigo-500" />
                Jarvis AI Assistant
              </h4>
              <Badge variant="accent">Personal Autonomous Project</Badge>
            </div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              Cross-Platform Desktop & Mobile Autonomous Agent
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              Developing an intelligent voice and text-driven autonomous agent capable of executing complex desktop and mobile device workflows. Integrated natural language understanding (NLU), voice recognition, and real-time task execution routines for system-level controls and modular file manipulation microservices.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Python", "NLP", "Speech Recognition", "OS Automation APIs", "System Integration", "Microservices"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                  alt="Jarvis Autonomous Brain Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Autonomous Task Pipeline</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                  alt="Voice & NLU Processing Core"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">NLU & Voice Routine Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-pink-500" />
                VayuSwarm — Drone Swarm Architecture
              </h4>
              <Badge variant="accent">Makers Conclave 2026</Badge>
            </div>
            <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mb-3">
              Autonomous Multi-Agent Drone Coordination & Telemetry
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              Architected a hierarchical multi-agent AI system enabling distributed coordination and autonomous task allocation across drone nodes. Implemented structured communication protocols and fault-tolerant state machines for low-latency telemetry synchronization.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Python", "Multi-Agent AI Systems", "Robotics Architecture", "Telemetry Sync", "State Machines"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
                  alt="Drone Swarm Telemetry"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Distributed Drone Nodes</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80"
                  alt="Low-Latency Telemetry Control"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Autonomous Task Allocation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-500" />
                UIDAI Demographic Analytics Engine
              </h4>
              <Badge variant="accent">National Level Submission</Badge>
            </div>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
              National Data Hackathon Large-Scale Processing
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              Constructed end-to-end data processing pipelines using Pandas to clean, aggregate, and evaluate large-scale demographic datasets. Formulated exploratory data models and visual distribution charts to identify anomalies and extract actionable insights.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Python", "Pandas", "NumPy", "EDA", "Google Colab", "Data Pipelines"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="Demographic Data Visualization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Anomaly Detection Pipeline</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Demographic Distribution Analytics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Exploratory Insights Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2026",
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-500" />
                Sentinel-Ops — Infrastructure Monitoring
              </h4>
              <Badge variant="accent">Team Lead (4-Member Team)</Badge>
            </div>
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3">
              Full-Stack Real-Time Operational Monitoring Dashboard
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              Led the technical design and modular service partitioning for a centralized real-time operational monitoring dashboard. Documented complete architecture blueprints and operational lifecycle strategies for stakeholders and evaluation panels.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {["Full-Stack", "Python", "Modular Architecture", "Real-Time Telemetry", "Technical Leadership"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 text-xs rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Infrastructure Monitoring Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Real-Time Service Telemetry</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 aspect-video group">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Operational Lifecycle Strategies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium">Modular Architecture Blueprint</span>
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
        title="Engineering Milestones & Hackathon Track Record"
        description="A timeline of cutting-edge AI architectures, autonomous agents, and national hackathon platforms built by Mehraj Kumarkiri."
      />
    </div>
  );
}
export default TimelineDemo;
