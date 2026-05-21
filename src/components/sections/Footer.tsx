"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cyan/10 bg-ocean-deep pt-20 pb-8">
      {/* Animated wave separator */}
      <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-cyan via-gold to-coral opacity-50" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-3 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl text-cyan">مَوْج</span>
              <span className="text-2xl font-bold text-pearl">Mawj</span>
            </div>
            <p className="text-pearl/60 text-sm mb-6">
              Riding the Wave of Digital Excellence. Award-winning web design &amp;
              development studio based in Casablanca, Morocco.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-pearl/40 hover:text-cyan transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-pearl mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Work", "Services", "Process", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-pearl/60 hover:text-cyan transition-colors inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Time */}
          <div>
            <h4 className="font-semibold text-pearl mb-4">Visit Us</h4>
            <p className="text-sm text-pearl/60 mb-2">
              Casablanca, Morocco
            </p>
            <p className="text-sm text-pearl/60 mb-4">
              hello@mawj.agency
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cyan/10 pt-8">
          <p className="text-xs text-pearl/40">
            &copy; {currentYear} Mawj Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-pearl/40 hover:text-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-pearl/40 hover:text-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ClockTicker() {
  return (
    <span>
      {new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}{" "}
      · CAS
    </span>
  );
}
