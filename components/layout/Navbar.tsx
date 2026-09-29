"use client";

import logo from "@/public/assets/images/logo.png"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "Models", href: "/#models" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md dark:bg-black">
      <div className="flex items-center justify-between px-6 py-3 md:justify-around md:px-0">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <p className="font-semibold text-ink">EchoGPT</p>
        </div>

        <nav className="hidden items-center gap-6 text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-ink">{link.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-4">
          <button className="hidden px-4 py-2 text-ink hover:bg-surface md:inline-block">Sign In</button>
          <button className="hidden bg-primary text-white px-4 py-2 md:inline-block">Get Started</button>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 text-ink hover:bg-surface md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-50 border-b border-line bg-background px-6 pb-6 shadow-md md:hidden dark:bg-black">
          <nav className="flex flex-col">
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
            <button className="border border-line text-ink hover:bg-surface">Sign In</button>
            <button className="bg-primary text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
