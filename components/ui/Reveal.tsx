"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const hiddenStyles = {
  up: "translate-y-6 opacity-0",
  scale: "scale-90 opacity-0",
} as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof hiddenStyles;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  duration = 600,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,translate,scale] ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 scale-100 opacity-100" : hiddenStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
