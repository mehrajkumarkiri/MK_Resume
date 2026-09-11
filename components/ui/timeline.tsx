"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title = "ENGINEERING JOURNEY.",
  description = "A chronological track record of autonomous AI agents, drone swarms, and national hackathons built from the ground up.",
}: {
  data: TimelineEntry[];
  title?: string;
  description?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
      id="timeline"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="text-[11px] font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase mb-3">
          CHRONOLOGICAL TRACK RECORD
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase mb-4">
          {title}
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-36 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center shadow-md">
                <div className="h-3.5 w-3.5 rounded-full bg-black shadow-xs" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-black text-neutral-400 tracking-tight uppercase">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-black text-black uppercase">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-neutral-700 to-transparent from-[0%] via-[20%] rounded-full shadow-[0_0_8px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};
export default Timeline;
