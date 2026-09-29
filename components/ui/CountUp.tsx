"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, number, suffix] = match;
  return {
    prefix,
    suffix,
    target: Number(number),
    decimals: number.split(".")[1]?.length ?? 0,
  };
}

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const parsed = parseValue(value);
  const [current, setCurrent] = useState(parsed?.target ?? 0);

  useEffect(() => {
    const element = ref.current;
    const target = parseValue(value)?.target;
    if (!element || target === undefined) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const countUp = () => {
      cancelAnimationFrame(frame);
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(target * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          countUp();
        } else if (entry.boundingClientRect.top > 0) {
          setCurrent(0);
        } else {
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!parsed) {
    return <p className={className}>{value}</p>;
  }

  return (
    <p ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {parsed.prefix}
      {current.toFixed(parsed.decimals)}
      {parsed.suffix}
    </p>
  );
}
