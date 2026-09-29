import TestimonialSlider from "@/components/ui/TestimonialSlider";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
    return (
        <section id="testimonials" className="w-full bg-ink/5 px-6 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-12 max-w-xl space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                        Loved by builders and operators
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        Join thousands of engineers and product teams who rely on EchoGPT for high-stakes intelligence.
                    </p>
                </div>

                <TestimonialSlider testimonials={testimonials} />
            </div>
        </section>
    )
}
