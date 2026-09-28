import Image from "next/image";
import heroDark from "@/public/assets/images/hero-dark.png"

export default function HeroSection() {
    return (
        <section className="relative flex w-full flex-col items-center bg-linear py-15">
            <h1 className="text-xs font-bold bg-surface text-primary border border-primary inline-flex items-center justify-center rounded-full px-4 py-2">ECHOGPT FOR DESKTOP & WEB</h1>

            <div className="text-center my-5 space-y-3">
                <h1 className="text-4xl font-bold">Your AI, Your Way</h1>
                <p className="text-md text-muted font-base"> A single intelligent hub. Switch between GPT-4o, Claude 3.5, and Gemini instantly. <br />
                    Customize custom personas, automate repetitive tasks, and chat without boundaries.</p>
            </div>

            <div className="flex items-center justify-center gap-5 text-sm">
                <button className="bg-primary text-white">Try EchoGPT Free</button>
                <button className="bg-white border border-gray-200">Watch 2 Min Demo</button>
            </div>

            <div className="my-5">
                <Image src={heroDark} alt="hero-light" className="w-full h-full object-cover rounded-lg"/>
            </div>
        </section>
    );
}