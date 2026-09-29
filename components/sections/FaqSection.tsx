import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faq"

const firstOpen = [faqs[0].value]

export default function FaqSection() {
    return (
        <section className="w-full bg-linear px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Everything you need to know about models, integrations, and enterprise configuration.
                    </p>
                </div>

                <Accordion
                    defaultValue={firstOpen}
                    className="mx-auto max-w-3xl rounded-xl border border-line/70 bg-white px-5 shadow-sm"
                >
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.value}
                            value={faq.value}
                            className="border-line/70"
                        >
                            <AccordionTrigger className="cursor-pointer py-4 text-sm font-semibold text-ink hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-xs leading-relaxed text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
