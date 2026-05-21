"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Palette, Smartphone, TrendingUp, Zap, Globe } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Next.js, React, fullstack — we build fast, modern web experiences.", tags: ["Frontend", "Backend", "Fullstack"] },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces that feel as good as they look.", tags: ["Figma", "Prototyping", "Design Systems"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "React Native &amp; hybrid solutions for iOS and Android.", tags: ["React Native", "iOS", "Android"] },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Data-driven strategies to grow your brand online.", tags: ["SEO", "PPC", "Analytics"] },
  { icon: Zap, title: "Performance", desc: "Optimize your existing app or site for speed and conversion.", tags: ["Core Web Vitals", "Lighthouse", "Conversion"] },
  { icon: Globe, title: "Branding", desc: "Define your brand identity with strategy and storytelling.", tags: ["Strategy", "Identity", "Guidelines"] },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="services" className="relative py-32">
      {/* Sticky title */}
      <div className="sticky top-32 z-10 mx-auto max-w-5xl px-6 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow"
        >
          Our Services
        </motion.p>
      </div>

      {/* Horizontal scroll content */}
      <div ref={containerRef} className="overflow-x-auto no-scrollbar">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-6 pb-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="group relative min-w-[320px] flex-1 rounded-2xl border border-cyan/10 bg-ocean-light/50 p-8 transition-colors hover:border-cyan/30 hover:bg-ocean-light/80"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-pearl">
                {service.title}
              </h3>
              <p className="mb-6 text-pearl/70">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan/5 px-3 py-1 text-xs font-medium text-cyan/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
