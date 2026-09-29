"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef, type CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";
import "swiper/css";
import type { Testimonial } from "@/data/testimonials";

const GLIDE_MS = 6000;
const STEP_MS = 450;
const GAP_PX = 24;
const MIN_STEP_RATIO = 0.2;

const avatarColors = [
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function slideSize(swiper: SwiperInstance) {
  return (swiper.slidesSizesGrid[0] ?? 1) + GAP_PX;
}

function distanceTo(swiper: SwiperInstance, index: number) {
  const snapIndex = Math.min(Math.max(index, 0), swiper.snapGrid.length - 1);
  return Math.abs(swiper.translate + swiper.snapGrid[snapIndex]);
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const hoveredRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const pendingRef = useRef<{ action: number; run: () => void } | null>(null);
  const actionRef = useRef(0);

  const afterTransition = (callback: () => void) => {
    pendingRef.current = { action: actionRef.current, run: callback };
  };

  const handleTransitionEnd = () => {
    const pending = pendingRef.current;
    if (!pending) return;
    pendingRef.current = null;
    requestAnimationFrame(() => {
      if (pending.action === actionRef.current) pending.run();
    });
  };

  const freeze = (swiper: SwiperInstance) => {
    actionRef.current += 1;
    pendingRef.current = null;
    const current = swiper.getTranslate();
    swiper.setTransition(0);
    swiper.setTranslate(current);
    swiper.animating = false;
    void swiper.wrapperEl.offsetWidth;
  };

  const glideNext = (swiper: SwiperInstance) => {
    if (swiper.destroyed || hoveredRef.current || reducedMotionRef.current) return;
    afterTransition(() => glideNext(swiper));
    swiper.slideNext(GLIDE_MS);
  };

  const startGliding = (swiper: SwiperInstance) => {
    if (swiper.destroyed || hoveredRef.current || reducedMotionRef.current) return;

    const remaining = distanceTo(swiper, swiper.activeIndex);
    if (remaining < 1) {
      glideNext(swiper);
      return;
    }

    afterTransition(() => glideNext(swiper));
    swiper.slideTo(swiper.activeIndex, Math.round((GLIDE_MS * remaining) / slideSize(swiper)));
  };

  const step = (direction: "prev" | "next") => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    freeze(swiper);

    const size = slideSize(swiper);
    const nearestIndex = direction === "next" ? swiper.activeIndex : swiper.activeIndex - 1;
    const distance = nearestIndex < 0 ? 0 : distanceTo(swiper, nearestIndex);

    if (distance >= size * MIN_STEP_RATIO) {
      afterTransition(() => startGliding(swiper));
      swiper.slideTo(nearestIndex, Math.round((STEP_MS * distance) / size));
      return;
    }

    const move = () => {
      afterTransition(() => startGliding(swiper));
      if (direction === "next") swiper.slideNext(STEP_MS);
      else swiper.slidePrev(STEP_MS);
    };

    if (distance < 1) {
      move();
      return;
    }

    afterTransition(move);
    swiper.slideTo(nearestIndex, Math.round((STEP_MS * distance) / size));
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <button
        type="button"
        onClick={() => step("prev")}
        aria-label="Previous testimonial"
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-card p-0 text-ink shadow-sm transition-[background-color,box-shadow,scale] hover:bg-surface hover:shadow-md active:scale-95 focus-visible:ring-3 focus-visible:ring-ring/50 outline-none sm:size-10"
      >
        <ChevronLeft className="size-4" />
      </button>

      <div
        className="min-w-0 flex-1"
        onMouseEnter={() => {
          hoveredRef.current = true;
          if (swiperRef.current) freeze(swiperRef.current);
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
          if (swiperRef.current) startGliding(swiperRef.current);
        }}
      >
        <Swiper
          loop
          speed={STEP_MS}
          spaceBetween={GAP_PX}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            swiper.on("transitionEnd", handleTransitionEnd);
            requestAnimationFrame(() => startGliding(swiper));
          }}
          onSliderFirstMove={() => {
            actionRef.current += 1;
            pendingRef.current = null;
          }}
          onTouchEnd={(swiper) => {
            afterTransition(() => startGliding(swiper));
            const action = actionRef.current;
            window.setTimeout(() => {
              if (action === actionRef.current && !swiper.animating) startGliding(swiper);
            }, STEP_MS + 100);
          }}
          className="-my-4! py-4!"
          style={{ "--swiper-wrapper-transition-timing-function": "linear" } as CSSProperties}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name} className="h-auto!">
              <figure className="flex h-full flex-col rounded-xl border border-line/70 bg-card p-5 shadow-sm sm:p-7">
                <Quote className="size-4 fill-primary text-primary" aria-hidden />

                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      avatarColors[index % avatarColors.length]
                    }`}
                    aria-hidden
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        type="button"
        onClick={() => step("next")}
        aria-label="Next testimonial"
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-card p-0 text-ink shadow-sm transition-[background-color,box-shadow,scale] hover:bg-surface hover:shadow-md active:scale-95 focus-visible:ring-3 focus-visible:ring-ring/50 outline-none sm:size-10"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}
