"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ScrollTo({ children, target, className }: { children: React.ReactNode; target: string; className?: string }) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[90%] items-center justify-between">
        {/* Logo */}
        <ScrollTo target="#hero">
          <motion.a
            href="#hero"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan font-display text-2xl">مَوْج</span>
            <span className="text-pearl">Mawj</span>
          </motion.a>
        </ScrollTo>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <ScrollTo key={link.label} target={link.href} className="relative group">
              <span className="text-sm text-pearl/70 transition-colors hover:text-cyan">
                {link.label}
              </span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </ScrollTo>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <ScrollTo target="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ocean transition-shadow hover:shadow-glow-gold cursor-pointer"
            >
              Start a Project
            </motion.button>
          </ScrollTo>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-pearl md:hidden cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-4 px-8 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollTo
                  key={link.label}
                  target={link.href}
                  className="text-lg text-pearl/80 hover:text-cyan"
                >
                  {link.label}
                </ScrollTo>
              ))}
              <ScrollTo target="#contact">
                <button className="mt-4 w-full rounded-full bg-gold py-3 text-sm font-semibold text-ocean">
                  Start a Project
                </button>
              </ScrollTo>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

