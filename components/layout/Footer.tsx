import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode, SVGProps } from "react";
import { footerColumns } from "@/data/footer";
import { isExternalHref, siteConfig } from "@/data/site";
import logo from "@/public/assets/images/logo.png";

function XIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
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
    { label: "EchoGPT on X", href: siteConfig.social.x, Icon: XIcon },
    { label: "EchoGPT on GitHub", href: siteConfig.social.github, Icon: GithubIcon },
    { label: "EchoGPT community", href: siteConfig.social.community, Icon: MessageCircle },
];

function FooterLink({ href, className, children, ...props }: { href: string; className: string; children: ReactNode; "aria-label"?: string }) {
    if (isExternalHref(href)) {
        const newTab = href.startsWith("http");
        return (
            <a
                href={href}
                className={className}
                {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="w-full border-t-2 border-primary/80 bg-background px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 py-12 md:py-14 lg:grid-cols-[1fr_auto] lg:gap-16">
                    <div className="max-w-xs">
                        <Link href="/#home" className="flex items-center gap-2">
                            <Image src={logo} alt="" width={28} height={28} className="rounded-md" />
                            <span className="text-base font-bold text-ink">EchoGPT</span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            The intelligent conversation hub that brings GPT, Claude, and Gemini under one
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
                                            <FooterLink
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                            </FooterLink>
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
                            <FooterLink
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-ink transition-colors hover:text-primary"
                            >
                                <Icon className="size-4" aria-hidden />
                            </FooterLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
