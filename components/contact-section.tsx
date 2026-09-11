"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mb-16">
        <div className="text-[11px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase mb-3">
          DIRECT INQUIRIES &amp; COLLABORATION
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase mb-4">
          GET IN TOUCH.
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Tell me what you&apos;re building. I&apos;ll get back within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-8 rounded-3xl glass-card space-y-6">
            <h3 className="font-extrabold text-xl text-black uppercase tracking-tight">
              Direct Channels
            </h3>

            {/* Email */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Email
                  </div>
                  <a
                    href="mailto:kumarkirimehraj05@gmail.com"
                    className="text-xs sm:text-sm font-bold text-black hover:underline"
                  >
                    kumarkirimehraj05@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() =>
                  handleCopy("kumarkirimehraj05@gmail.com", "email")
                }
                className="p-2 text-neutral-500 hover:text-black"
                title="Copy email"
              >
                {copied === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+917350695999"
                    className="text-xs sm:text-sm font-bold text-black hover:underline"
                  >
                    +91 7350695999
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy("+917350695999", "phone")}
                className="p-2 text-neutral-500 hover:text-black"
                title="Copy phone"
              >
                {copied === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-black" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-bold text-black">
                  Hyderabad (Academic) / Maharashtra (Permanent)
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-100 hover:bg-black hover:text-white text-neutral-800 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    LinkedIn
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/mehrajkumarkiri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-100 hover:bg-black hover:text-white text-neutral-800 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    GitHub
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl glass-card">
            <h3 className="font-black text-2xl text-black uppercase tracking-tight mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-neutral-500 font-medium mb-8">
              Discuss autonomous AI architecture, hackathons, or full-stack software development.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-neutral-100 border border-neutral-300 text-center space-y-3">
                <Check className="w-8 h-8 mx-auto text-black" />
                <h4 className="font-extrabold text-base text-black uppercase">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-neutral-600">
                  Thank you! Mehraj will respond to your email address shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold tracking-wider text-neutral-600 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/80 focus:bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold tracking-wider text-neutral-600 uppercase mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/80 focus:bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold tracking-wider text-neutral-600 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="AI Engineering Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/80 focus:bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold tracking-wider text-neutral-600 uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your engineering project or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/80 focus:bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-102 active:scale-98"
                >
                  <span>Submit Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
