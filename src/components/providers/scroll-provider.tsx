"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

export let lenisInstance: Lenis | null = null;

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return children;
}

export function scrollTo(target: string, options?: { offset?: number }) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: options?.offset ?? -80 });
  } else {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
