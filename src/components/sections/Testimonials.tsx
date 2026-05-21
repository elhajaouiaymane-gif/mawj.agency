"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mawj transformed our digital presence completely. The attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Benamar",
    role: "CEO, Atlas Ventures",
    company: "atlasventures.ma",
    initials: "SB",
  },
  {
    quote: "Working with Mawj felt like having an extension of our own team. They truly understand the craft of digital creation.",
    author: "Karim El Amrani",
    role: "Founder, Oasis Hotels",
    company: "oasishotels.com",
    initials: "KE",
  },
  {
    quote: "The results speak for themselves. Our conversion rate jumped 340% in the first quarter after launch.",
    author: "Nadia Fassi",
    role: "CMO, Sahara Energy",
    company: "saharaenergy.ma",
    initials: "NF",
  },
  {
    quote: "Mawj's team is incredibly talented and professional. They delivered a world-class website that truly represents our brand.",
    author: "Omar Badreddine",
    role: "Director, MediConnect",
    company: "mediconnect.ma",
    initials: "OB",
  },
  {
    quote: "From concept to launch, the process was seamless. The team's creativity and technical expertise are unmatched.",
    author: "Laila Rachidi",
    role: "Owner, Artisan Eats",
    company: "artisaneats.com",
    initials: "LR",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 100;
    if (info.offset.x < -threshold && activeIndex < testimonials.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="eyebrow mb-4"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl font-bold tracking-tight text-pearl md:text-6xl mb-16"
        >
          What Clients Say
        </motion.h2>

        {/* Testimonial Carousel */}
        <div ref={containerRef} className="relative">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ x: -activeIndex * 100 + "%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="flex"
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-full px-4">
                  <div className="rounded-2xl border border-cyan/10 bg-ocean-light/30 p-8 md:p-12">
                    <Quote className="mb-6 text-cyan/30" size={40} />
                    <p className="font-display text-xl md:text-2xl text-pearl leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-cyan font-semibold text-sm">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-pearl">{testimonial.author}</p>
                        <p className="text-sm text-pearl/60">
                          {testimonial.role} · {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-8 bg-cyan" : "w-2 bg-cyan/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
