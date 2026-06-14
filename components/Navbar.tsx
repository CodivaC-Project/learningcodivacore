"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-xl shadow-[0_1px_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="shrink-0">
          <img src="/codivacode-logo.png" alt="CodivaCore" className="h-10 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-[20px] px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  l.label === "Home"
                    ? "bg-accent text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-[20px] bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
          >
            Get Started
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-[20px] bg-accent"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-4 rounded bg-white transition-all ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded bg-white transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded bg-white transition-all ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80 border-t border-line" : "max-h-0 border-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-card/95 px-6 py-4 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  l.label === "Home"
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
