import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { footerColumns } from "@/data/footer";
import logo from "@/public/assets/images/logo.png";

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

const socials = [
    { label: "Twitter", href: "#", Icon: TwitterIcon },
    { label: "GitHub", href: "#", Icon: GithubIcon },
    { label: "Community chat", href: "#", Icon: MessageCircle },
];

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-primary/80 bg-white px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 py-12 md:py-14 lg:grid-cols-[1fr_auto] lg:gap-16">
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src={logo} alt="" width={28} height={28} className="rounded-md" />
                            <span className="text-base font-bold text-ink">EchoGPT</span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            The intelligent conversation hub that brings GPT-4o, Claude 3.5, and Gemini under one
                            streamlined private workflow.
                        </p>
                    </div>

                    <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <h3 className="text-xs font-bold uppercase tracking-wide text-ink">
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-col-reverse items-center justify-between gap-4 pb-10 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} EchoGPT Labs Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socials.map(({ label, href, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-ink transition-colors hover:text-primary"
                            >
                                <Icon className="size-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
