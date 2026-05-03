"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 md:py-6">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight text-foreground md:text-2xl"
        >
          Eyoel Abera
          <span className="ml-2 hidden text-sm font-sans font-normal text-muted md:inline">
            Piano Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-charcoal px-5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-charcoal-soft"
          >
            Book a Lesson
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-cream md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-cream hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-charcoal px-5 py-3 text-center text-base font-medium text-ivory"
            >
              Book a Lesson
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
