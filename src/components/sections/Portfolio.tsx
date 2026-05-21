"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Atlas Ventures", category: "Fintech", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&q=80", metric: "+340% conversions", color: "from-cyan/20 to-ocean" },
  { title: "Oasis Hotels", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a92545d43e3?w=600&h=500&q=80", metric: "2M+ bookings", color: "from-gold/20 to-ocean" },
  { title: "Sahara Energy", category: "Energy & Tech", image: "https://images.unsplash.com/photo-1466611653911-95285515e62f?w=600&h=700&q=80", metric: "-60% carbon footprint", color: "from-coral/20 to-ocean" },
  { title: "MediConnect", category: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-1121db55ab77?w=600&h=600&q=80", metric: "1M+ patients", color: "from-cyan/20 to-ocean" },
  { title: "Artisan Eats", category: "Food & Beverage", image: "https://images.unsplash.com/photo-1504674900247-0877d9f4e2a3?w=600&h=550&q=80", metric: "+500% orders", color: "from-gold/20 to-ocean" },
  { title: "Skyline Real Estate", category: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059b419e?w=600&h=750&q=80", metric: "$2B+ in sales", color: "from-coral/20 to-ocean" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _scrollProgress = scrollYProgress;

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl font-bold tracking-tight text-pearl md:text-6xl"
        >
          Our Portfolio
        </motion.h2>
      </div>

      {/* Masonry Grid */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className={`aspect-[4/5] w-full bg-gradient-to-b ${project.color} relative`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-ocean/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-widest text-cyan font-mono">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-pearl">{project.title}</h3>
                  <p className="mt-1 text-sm text-pearl/80">{project.metric}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
