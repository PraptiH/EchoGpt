"use client";

import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { models } from "@/data/models";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Models() {
  return (
    <LazyMotion features={domAnimation}>
    <section id="models" className="w-full px-6 py-16 md:py-20 bg-ink/5">
      <div className="mx-auto max-w-6xl">

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Access All Leading Foundation Models
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            We continuously integrate the latest releases so your workflow never gets locked in.
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-8 flex flex-col items-start gap-3"
        >
          {models.map((model) => {
            const Icon = model.icon;
            const isAvailable = model.status === "available";

            return (
              <m.div
                key={model.name}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.2,
                }}
                className={`flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border bg-white px-4 py-3.5 shadow-sm ${
                  isAvailable ? "border-primary" : "border-line/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="size-6 shrink-0"
                    fill={model.iconColor}
                    stroke={model.iconColor}
                  />
                  <div>
                    <p className="text-sm font-bold leading-tight text-ink">{model.name}</p>
                    <p className="text-xs text-muted-foreground">{model.provider}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {model.badge && (
                    <span className="rounded-md bg-surface px-2 py-1 text-[11px] font-medium text-muted-foreground">
                      {model.badge}
                    </span>
                  )}
                  <span
                    className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
                      isAvailable
                        ? "bg-green-50 text-green-700"
                        : "bg-surface text-muted-foreground"
                    }`}
                  >
                    {isAvailable ? "Available" : "Coming Soon"}
                  </span>
                </div>
              </m.div>
            );
          })}
        </m.div>

      </div>
    </section>
    </LazyMotion>
  );
}
