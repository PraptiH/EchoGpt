"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { models } from "@/data/models";
import logo from "@/public/assets/images/logo.png";

const ORBIT_RADIUS = 38;
const ROUTE_MS = 2400;

const nodes = models.map((model, index) => {
  const angle = (index / models.length) * 2 * Math.PI - Math.PI / 2;
  return {
    model,
    x: Number((50 + ORBIT_RADIUS * Math.cos(angle)).toFixed(3)),
    y: Number((50 + ORBIT_RADIUS * Math.sin(angle)).toFixed(3)),
  };
});

export default function ModelOrbit() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % nodes.length), ROUTE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div aria-hidden className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-[15%] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute inset-[12%] rounded-full border border-dashed border-muted-foreground/25" />

      <div className="absolute inset-0 animate-orbit motion-reduce:animate-none">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
          {nodes.map(({ model, x, y }, index) => (
            <line
              key={model.name}
              x1={50}
              y1={50}
              x2={x}
              y2={y}
              strokeDasharray="1.5 2.5"
              strokeLinecap="round"
              className={`transition-[stroke,stroke-width] duration-500 ${
                index === active
                  ? "animate-dash-flow stroke-primary [stroke-width:0.6] motion-reduce:animate-none"
                  : "stroke-muted-foreground/30 [stroke-width:0.35]"
              }`}
            />
          ))}
        </svg>

        {nodes.map(({ model, x, y }, index) => (
          <div
            key={model.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="animate-orbit-reverse motion-reduce:animate-none">
              <div
                className={`flex size-11 items-center justify-center rounded-xl border bg-card shadow-md transition-all duration-500 sm:size-14 sm:rounded-2xl ${
                  index === active
                    ? "scale-110 border-primary shadow-lg shadow-primary/25 ring-4 ring-primary/15"
                    : "border-line/70"
                }`}
              >
                <Image
                  src={model.logo}
                  alt=""
                  width={28}
                  height={28}
                  className={`size-5 sm:size-7 ${model.monochromeLogo ? "dark:invert" : ""}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-pulse-ring rounded-3xl bg-primary/30 motion-reduce:animate-none" />
        <span className="absolute inset-0 animate-pulse-ring rounded-3xl bg-primary/30 [animation-delay:1.5s] motion-reduce:animate-none" />
        <div className="relative flex size-20 items-center justify-center rounded-3xl border border-primary/40 bg-card shadow-xl shadow-primary/20 sm:size-24">
          <Image src={logo} alt="" width={52} height={52} className="size-11 rounded-xl sm:size-13" />
        </div>
      </div>
    </div>
  );
}
