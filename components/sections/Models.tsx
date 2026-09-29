import Image from "next/image";
import ModelOrbit from "@/components/ui/ModelOrbit";
import Reveal from "@/components/ui/Reveal";
import { models } from "@/data/models";

export default function Models() {
  return (
    <section id="models" className="w-full overflow-x-clip px-6 py-16 md:py-20 bg-ink/5">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]">
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Access All Leading Foundation Models
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              We continuously integrate the latest releases so your workflow never gets locked in.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col items-start gap-3">
            {models.map((model, index) => {
              const isAvailable = model.status === "available";

              return (
                <li key={model.name} className="max-w-full">
                  <Reveal delay={index * 120} duration={500}>
                    <div
                      className={`flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border bg-card px-4 py-3.5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:translate-none ${
                        isAvailable ? "border-primary" : "border-line/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg ">
                          <Image
                            src={model.logo}
                            alt={`${model.provider} logo`}
                            width={20}
                            height={20}
                            className={`size-5 ${model.monochromeLogo ? "dark:invert" : ""}`}
                          />
                        </span>
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
                              ? "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                              : "bg-surface text-muted-foreground"
                          }`}
                        >
                          {isAvailable ? "Available" : "Coming Soon"}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal variant="scale" duration={700} className="flex justify-center">
          <ModelOrbit />
        </Reveal>
      </div>
    </section>
  );
}
