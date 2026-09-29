import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import SignupForm from "@/components/ui/SignupForm";
import { downloads } from "@/data/site";
import { cn } from "@/lib/utils";

export default function CTASection() {
    return (
        <section id="get-started" className="w-full bg-linear-to-r from-primary to-violet-600 px-6 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mx-auto max-w-md text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    Ready to supercharge your workflow?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Join over 10,000 professional developers and start orchestrating your custom agents today.
                </p>

                <SignupForm />

                <div id="download" className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        Or install EchoGPT
                    </p>
                    <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {downloads.map((target) => (
                            <li key={target.label}>
                                <button
                                    type="button"
                                    className={cn(buttonVariants({ variant: "glass" }), "h-auto w-full flex-col gap-0.5 py-2.5")}
                                >
                                    <span className="flex items-center gap-1.5 text-sm font-semibold">
                                        <Download className="size-3.5" aria-hidden />
                                        {target.label}
                                    </span>
                                    <span className="text-[11px] font-normal text-white/70">{target.platform}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
