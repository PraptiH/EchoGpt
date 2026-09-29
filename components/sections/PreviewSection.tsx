"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

const images = [
    {
        src: "/assets/images/preview3.png"
    },
    {
        src: "/assets/images/preview1.png"
    },
    {
        src: "/assets/images/preview2.png"
    },
];

const panels = [...images, ...images];
const angleStep = 360 / panels.length;

export default function PreviewSection() {
    return (
        <LazyMotion features={domAnimation}>
        <section className="relative w-full overflow-hidden bg-line px-6 py-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[48rem] -translate-x-1/2 
            -translate-y-1/2 rounded-full bg-primary/30 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 max-w-2xl space-y-4 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                        Interactive AI Workspace
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        Explore the EchoGPT workspace built for seamless conversations, model switching, and AI-powered productivity.
                    </p>
                </m.div>

                <m.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="group relative flex h-[260px] items-start justify-center pt-8 [--panel-w:220px] [--ring-radius:calc(var(--panel-w)*1.05)] [perspective:1400px] sm:h-[320px] sm:[--panel-w:280px] md:h-[400px] md:pt-12 md:[--panel-w:380px] lg:h-[480px] lg:[--panel-w:480px]"
                >
                    <div className="relative aspect-[16/10] w-[var(--panel-w)] animate-spin-ring [transform-style:preserve-3d] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                        {panels.map((image, index) => (
                            <figure
                                key={`${image.src}-${index}`}
                                className="absolute inset-0 overflow-hidden rounded-md shadow-xl shadow-black/25"
                                style={
                                    {
                                        transform: `rotateY(${index * angleStep}deg) translateZ(var(--ring-radius))`,
                                        WebkitBoxReflect:
                                            "below 10px linear-gradient(transparent, transparent 55%, rgba(255, 255, 255, 0.28))",
                                    } as CSSProperties
                                }
                            >
                                <Image
                                    src={image.src}
                                    alt="EchoGPT sidebar"
                                    width={1024}
                                    height={640}
                                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 380px, 280px"
                                    className="h-full w-full object-cover"
                                />
                            </figure>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
        </LazyMotion>
    );
}
