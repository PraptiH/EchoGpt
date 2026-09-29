"use client";

import { Moon, Sun } from "lucide-react";

// Must match the key read by the head script in app/layout.tsx.
const THEME_STORAGE_KEY = "theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {}
  };

  // Icons are swapped by the `dark` class rather than React state, so the server
  // markup matches whatever theme the head script applied before hydration.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={`p-2 text-ink hover:bg-surface ${className}`}
    >
      <Moon className="size-5 dark:hidden" />
      <Sun className="hidden size-5 dark:block" />
    </button>
  );
}
