import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehraj Kumarkiri | AI Engineer & Full-Stack Developer",
  description:
    "Official portfolio of Mehraj Kumarkiri. Autonomous agent builder, multi-agent AI systems architect, and national hackathon competitor.",
  keywords: [
    "Mehraj Kumarkiri",
    "AI Engineer",
    "Autonomous Agents",
    "Drone Swarm",
    "Full-Stack Developer",
    "TakeOver Hackathon",
    "MERN Stack",
  ],
  authors: [{ name: "Mehraj Kumarkiri" }],
  openGraph: {
    title: "Mehraj Kumarkiri | AI Engineer & Full-Stack Developer",
    description:
      "Official portfolio of Mehraj Kumarkiri. Autonomous agent builder, multi-agent AI systems architect, and national hackathon competitor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
