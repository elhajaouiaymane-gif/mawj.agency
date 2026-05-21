"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: "linear-gradient(90deg, #00D4FF, #FFB800, #FF5E3A)",
      }}
    >
      <div
        ref={progressRef}
        className="h-full w-0 transition-none"
        style={{
          background: "linear-gradient(90deg, #00D4FF, #FFB800, #FF5E3A)",
        }}
      />
    </div>
  );
}