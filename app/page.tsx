import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsSection } from "@/components/skills-section";
import { TimelineDemo } from "@/components/timeline-demo";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col">
      <Navbar />
      <Hero />
      <SkillsSection />
      <TimelineDemo />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
