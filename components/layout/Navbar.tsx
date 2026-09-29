"use client";

import logo from "@/public/assets/images/logo.png"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Models", href: "/#models" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    const desktop = window.matchMedia("(min-width: 768px)");

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md dark:bg-black">
      <div className="flex items-center justify-between px-6 py-3 md:justify-around md:px-0">
        <Link href="/#home" className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
          <Image src={logo} alt="" width={40} height={40} />
          <span className="font-semibold text-ink">EchoGPT</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-ink">{link.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-4">
          <button type="button" className={cn(buttonVariants({ variant: "ghost" }), "hidden md:inline-flex")}>
            Sign In
          </button>
          <Link href="/#get-started" className={cn(buttonVariants(), "hidden md:inline-flex")}>
            Get Started
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(buttonVariants({ variant: "icon", size: "icon" }), "md:hidden")}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 border-b border-line bg-background px-6 pb-6 shadow-md md:hidden dark:bg-black">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-sm text-muted-foreground hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-transparent shadow-none hover:bg-ink hover:text-background active:bg-ink active:text-background",
              )}
            >
              Sign In
            </button>
            <Link href="/#get-started" onClick={() => setOpen(false)} className={buttonVariants()}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
