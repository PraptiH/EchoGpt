import Image from "next/image";
import heroDark from "@/public/assets/images/hero-dark.png"

export default function HeroSection() {
    return (
        <section className="relative flex w-full flex-col items-center bg-linear py-15 bg-surface">
            <h1 className="text-xs font-bold bg-surface/10 text-primary border border-primary inline-flex items-center justify-center rounded-full px-4 py-2">ECHOGPT FOR DESKTOP & WEB</h1>

            <div className="text-center my-5 space-y-3">
                <h1 className="text-4xl font-bold">Your AI, Your Way</h1>
                <p className="text-md text-muted-foreground font-base"> A single intelligent hub. Switch between GPT-4o, Claude 3.5, and Gemini instantly. <br />
                    Customize custom personas, automate repetitive tasks, and chat without boundaries.</p>
            </div>

            <div className="flex items-center justify-center gap-5 text-sm">
                <button className="bg-primary text-white">Try EchoGPT Free</button>
                <button className="bg-white border border-gray-200">Watch 2 Min Demo</button>
            </div>

            <div className="my-5 w-full px-6 lg:max-w-4xl xl:max-w-5xl">
                <Image
                    src={heroDark}
                    alt="EchoGPT app preview"
                    preload
                    placeholder="blur"
                    sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 896px, 100vw"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </section>
    );
}