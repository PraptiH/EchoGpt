import { CircleCheck } from "lucide-react";
import { plans } from "@/data/pricing";

export default function PricingSection() {
    return (
        <section className="bg-surface/5 w-full px-6 py-20">
        <div className="mx-auto max-w-6xl sm:px-6 md:px-10 lg:px-16 xl:px-30 py-12 lg:py-15 xl:py-20">
            
            <div className="text-center space-y-4">
                <p className="font-semibold text-xs sm:text-sm tracking-[0.2em] text-blue-600">PRICING</p>
                <h2 className="text-3xl font-bold text-ink md:text-4xl">Simple, transparent plans</h2>
                <p className="text-sm leading-relaxed text-muted">No hidden fees. Flexible pricing. Try any plan free for 3 days.</p>
            </div>

                <div className="grid items-stretch gap-5 md:grid-cols-3 py-5">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                                plan.recommended ? "border-primary" : "border-line/70"
                            }`}
                        >
                            {plan.recommended && (
                                <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                                    Recommended
                                </span>
                            )}

                            <h3 className="text-base font-bold text-ink">{plan.name}</h3>
                            <p className="mt-3 text-sm text-muted">{plan.description}</p>

                            <div className="mt-4 flex items-baseline gap-1.5">
                                <span className="text-4xl font-bold tracking-tight text-ink">{plan.price}</span>
                                <span className="text-xs text-muted">{plan.period}</span>
                            </div>

                            <div className="my-6 h-px w-full bg-line" />

                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5 text-sm text-ink">
                                        <CircleCheck className="size-4 shrink-0 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-auto w-full ${
                                    plan.recommended
                                        ? "bg-primary text-white"
                                        : "bg-surface text-ink"
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
