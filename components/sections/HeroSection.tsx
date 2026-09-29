import Image from "next/image";
import heroDark from "@/public/assets/images/hero-dark.png"
import heroLight from "@/public/assets/images/hero-light.png"

export default function HeroSection() {
    return (
        <section id="home" className="relative flex w-full flex-col items-center bg-linear px-6 py-12 md:py-15 bg-surface">
            <h1 className="text-[10px] sm:text-xs font-bold bg-surface/10 text-primary border border-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-center">ECHOGPT FOR DESKTOP & WEB</h1>

            <div className="text-center my-5 space-y-3">
                <h1 className="text-3xl sm:text-4xl font-bold">Your AI, Your Way</h1>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground font-base"> A single intelligent hub. Switch between GPT-4o, Claude 3.5, and Gemini instantly. <br className="hidden md:block" />
                    Customize custom personas, automate repetitive tasks, and chat without boundaries.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-sm">
                <button className="bg-primary text-white">Try EchoGPT Free</button>
                <button className="bg-card text-ink border border-line">Watch 2 Min Demo</button>
            </div>

            <div className="my-5 w-full lg:max-w-4xl xl:max-w-5xl">
                <Image
                    src={heroDark}
                    alt="EchoGPT app preview"
                    fetchPriority="high"
                    placeholder="blur"
                    sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, 100vw"
                    className="w-full h-full object-cover rounded-lg dark:hidden"
                />
                <Image
                    src={heroLight}
                    alt="EchoGPT app preview"
                    fetchPriority="high"
                    placeholder="blur"
                    sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, 100vw"
                    className="hidden w-full h-full object-cover rounded-lg dark:block"
                />
            </div>
        </section>
    );
}
