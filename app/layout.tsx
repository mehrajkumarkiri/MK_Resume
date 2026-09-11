import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehraj Kumarkiri — AI Engineer & Full-Stack Developer",
  description:
    "Official portfolio of Mehraj Kumarkiri. Autonomous agent builder, multi-agent AI systems architect, and national hackathon competitor.",
  keywords: [
    "Mehraj Kumarkiri",
    "AI Engineer",
    "Autonomous Agents",
    "Drone Swarm",
    "Full-Stack Developer",
    "TakeOver Hackathon",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-neutral-900 bg-grid min-h-screen antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
