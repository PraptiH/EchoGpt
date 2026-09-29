import { capabilities } from "@/data/capabilities";

export default function CapabilitiesSection() {
    return (
        <section id="features" className="bg-surface/5 w-full px-6 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
                    <h2 className="text-3xl font-bold text-ink md:text-4xl">Powerful capabilities out of the box</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">Everything you need to orchestrate multiple LLMs, configure guardrails, and automate daily knowledge tasks efficiently.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        capabilities.map((capability) => {
                            const Icon = capability.icon
                            return (
                                <div
                                    key={capability.title}
                                    className="rounded-xl border border-line/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
                                >
                                    <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                                        <Icon className="size-4 text-primary" strokeWidth={2} />
                                    </div>
                                    <h4 className="mb-2 text-base font-bold text-ink">{capability.title}</h4>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
