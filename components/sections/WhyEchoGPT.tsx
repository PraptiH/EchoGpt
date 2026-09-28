import { CircleCheck } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { highlights, stats } from "@/data/whyEchoGPT";

export default function WhyEchoGPT() {
  return (
    <section className="w-full bg-linear px-6 py-20">
      <div className="mx-auto grid items-start max-w-6xl gap-12 lg:grid-cols-2">
        <div className="py-5">
          <h2 className="max-w-md text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Built for professional workflows and developers
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            We treat conversation as an engineering workspace. No gimmicks, just pure control over
            your intelligence stack, latency optimizations, and secure data handling.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2.5 text-sm text-ink font-medium leading-tight">
                <CircleCheck className="size-4 shrink-0 text-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:mt-20">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-xl border border-line/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <CountUp
                value={stat.value}
                className="text-3xl font-bold tracking-tight text-primary"
              />
              <h3 className="mt-3 text-sm font-bold text-ink">{stat.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
