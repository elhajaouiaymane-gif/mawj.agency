"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 340, suffix: "%", label: "Average Conversion Lift", description: "Across all client projects" },
  { icon: Users, value: 150, suffix: "+", label: "Projects Delivered", description: "In over 12 countries" },
  { icon: Award, value: 25, suffix: "+", label: "Awards Won", description: "Awwwards, CSS Design, FWA" },
  { icon: Clock, value: 98, suffix: "%", label: "Client Retention", description: "Long-term partnerships" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean via-ocean-deep to-ocean" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-cyan transition-transform group-hover:scale-110">
                <stat.icon size={24} />
              </div>
              <div className="font-mono text-4xl font-bold text-cyan md:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 font-semibold text-pearl text-lg">{stat.label}</p>
              <p className="mt-1 text-sm text-pearl/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
