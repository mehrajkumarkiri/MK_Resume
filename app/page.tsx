import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SkillsSection } from "@/components/skills-section";
import { TimelineDemo } from "@/components/timeline-demo";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col relative">
      <Navbar />
      <Hero />
      <TimelineDemo />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
