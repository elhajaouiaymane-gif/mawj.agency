"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoLines = [
  "We believe the internet is the most",
  "powerful medium ever invented.",
  "We are surfers of a digital sea —",
  "entrepreneurs, creatives, and builders",
  "who ride the waves of technology",
  "to create experiences that move people."
];

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-[100dvh] py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow mb-8"
        >
          The Manifesto
        </motion.p>
        <div className="space-y-4">
          {manifestoLines.map((line, i) => {
            const start = i * (1 / manifestoLines.length);
            const end = start + 0.3;
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            const y = useTransform(scrollYProgress, [start, end], [40, 0]);

            return (
              <motion.h2
                key={i}
                style={{ opacity, y }}
                className="font-display text-3xl font-medium leading-snug tracking-tight text-pearl/90 sm:text-4xl md:text-5xl"
              >
                {line}
              </motion.h2>
            );
          })}
        </div>
      </div>
    </section>
  );
}
