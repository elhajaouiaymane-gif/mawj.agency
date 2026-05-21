"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your brand, goals, and target audience.",
    icon: Search,
    details: ["Brand Audit", "Market Research", "Competitor Analysis", "Stakeholder Interviews"],
  },
  {
    number: "02",
    title: "Strategy",
    description: "We architect the perfect solution with data-driven insights.",
    icon: PenTool,
    details: ["UX Architecture", "Content Strategy", "Technical Planning", "Timeline & Milestones"],
  },
  {
    number: "03",
    title: "Design",
    description: "Pixel-perfect interfaces that resonate with your audience.",
    icon: PenTool,
    details: ["Wireframes", "Visual Design", "Prototyping", "Brand Guidelines"],
  },
  {
    number: "04",
    title: "Development",
    description: "Clean, scalable code built with modern technologies.",
    icon: Code,
    details: ["Frontend", "Backend", "API Integration", "Performance Optimization"],
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy, monitor, and ensure everything runs perfectly.",
    icon: Rocket,
    details: ["QA Testing", "Deployment", "Analytics Setup", "Training"],
  },
  {
    number: "06",
    title: "Growth",
    description: "Continuous optimization and support for lasting success.",
    icon: BarChart3,
    details: ["A/B Testing", "SEO Monitoring", "Support", "Future Roadmap"],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="process" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow mb-4"
        >
          Our Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl font-bold tracking-tight text-pearl md:text-6xl mb-16"
        >
          How We Work
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* SVG Line */}
          <svg
            className="absolute left-8 top-0 h-full w-1 hidden md:block"
            viewBox="0 0 4 100%"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 0 L2 100%"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#FF5E3A" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-16 md:pl-32"
              >
                {/* Number bubble */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-mono text-sm font-bold md:left-16 md:-translate-x-1/2">
                  {step.number}
                </div>

                <div className="rounded-2xl border border-cyan/10 bg-ocean-light/30 p-6 md:p-8 hover:border-cyan/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-pearl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-pearl/70 mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-full bg-cyan/5 px-3 py-1 text-xs text-cyan/80"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
