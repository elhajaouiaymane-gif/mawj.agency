"use client";

import { useState } from "react";
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
    const element = document.querySelector(target);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return <button onClick={handleClick} className={className}>{children}</button>;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-4" : "py-6"}`}>
      <div className="mx-auto flex max-w-[90%] items-center justify-between">
        <ScrollTo target="#hero">
          <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="text-cyan font-display text-2xl">مَوْج</span>
            <span className="text-pearl">Mawj</span>
          </a>
        </ScrollTo>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <ScrollTo key={link.label} target={link.href} className="relative group">
              <span className="text-sm text-pearl/70 transition-colors hover:text-cyan">{link.label}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan transition-all duration-300 group-hover:w-full" />
            </ScrollTo>
          ))}
        </div>

        <div className="hidden md:block">
          <ScrollTo target="#contact">
            <button className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ocean cursor-pointer">
              Start a Project
            </button>
          </ScrollTo>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-pearl md:hidden cursor-pointer p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="glass mt-4 px-8 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <ScrollTo key={link.label} target={link.href} className="text-lg text-pearl/80 hover:text-cyan">
                {link.label}
              </ScrollTo>
            ))}
            <ScrollTo target="#contact">
              <button className="mt-4 w-full rounded-full bg-gold py-3 text-sm font-semibold text-ocean">
                Start a Project
              </button>
            </ScrollTo>
          </div>
        </div>
      )}
    </nav>
  );
}
