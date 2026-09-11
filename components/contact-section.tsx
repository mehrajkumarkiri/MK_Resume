"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
    // Client-side simulation of message submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Interested in collaborating on AI systems, hackathons, or software engineering opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-6">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      Email
                    </div>
                    <a
                      href="mailto:kumarkirimehraj05@gmail.com"
                      className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-purple-500 transition-colors"
                    >
                      kumarkirimehraj05@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleCopy("kumarkirimehraj05@gmail.com", "email")
                  }
                  className="p-2 text-neutral-400 hover:text-purple-500"
                  title="Copy email"
                >
                  {copied === "email" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      Phone / WhatsApp
                    </div>
                    <a
                      href="tel:+917350695999"
                      className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-indigo-500 transition-colors"
                    >
                      +91 7350695999
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+917350695999", "phone")}
                  className="p-2 text-neutral-400 hover:text-indigo-500"
                  title="Copy phone number"
                >
                  {copied === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Hyderabad, India (Academic) / Maharashtra (Permanent)
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/mehraj-kumarkiri-2ab373211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 hover:border-purple-500 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-purple-500 transition-colors" />
                </a>

                <a
                  href="https://github.com/mehrajkumarkiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 hover:border-purple-500 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-purple-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                Fill in the form below to initiate collaboration, request code samples, or discuss engineering roles.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                  <Check className="w-8 h-8 mx-auto" />
                  <p className="font-semibold text-sm">
                    Thank you! Your message has been received.
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    Mehraj Kumarkiri will follow up shortly at your provided email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Alex Rivera"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Opportunity / Collaboration Inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Mehraj, I reviewed your work on autonomous drone swarms and Jarvis AI..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    className="w-full sm:w-auto gap-2 text-sm font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
