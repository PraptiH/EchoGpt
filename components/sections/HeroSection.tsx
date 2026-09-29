import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroDark from "@/public/assets/images/hero-dark.png"
import heroLight from "@/public/assets/images/hero-light.png"

export default function HeroSection() {
    return (
        <section id="home" className="relative flex w-full flex-col items-center bg-surface px-6 py-12 md:py-15">
            <p className="text-[10px] sm:text-xs font-bold bg-surface/10 text-primary border border-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-center">ECHOGPT FOR DESKTOP & WEB</p>

            <div className="text-center my-5 space-y-3">
                <h1 className="text-3xl sm:text-4xl font-bold">Your AI, Your Way</h1>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground font-base">A single intelligent hub. Switch between GPT-6, Claude Opus, and Gemini instantly. <br className="hidden md:block" />
                    Build custom personas, automate repetitive tasks, and chat without boundaries.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <Link href="/#get-started" className={cn(buttonVariants({ size: "lg" }), "group")}>
                    Try EchoGPT Free
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link href="/#download" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    <Download className="size-4" aria-hidden />
                    Download for Desktop
                </Link>
            </div>

            <div className="my-5 w-full lg:max-w-4xl xl:max-w-5xl">
                <Image
                    src={heroDark}
                    alt="EchoGPT app preview"
                    loading="eager"
                    fetchPriority="high"
                    placeholder="blur"
                    sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, 100vw"
                    className="w-full h-full object-cover rounded-lg dark:hidden"
                />
                <Image
                    src={heroLight}
                    alt="EchoGPT app preview"
                    loading="eager"
                    fetchPriority="high"
                    placeholder="blur"
                    sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, 100vw"
                    className="hidden w-full h-full object-cover rounded-lg dark:block"
                />
            </div>
        </section>
    );
}
