"use client";

import { useCallback } from "react";
import { useLenis } from "@/components/hooks/useLenis";

export function ScrollTo({ children, target, className }: { 
  children: React.ReactNode; 
  target: string;
  className?: string;
}) {
  const lenis = useLenis();

  const handleClick = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 });
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [lenis, target]);

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
