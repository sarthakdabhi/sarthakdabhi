"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-fg hover:text-white transition"
        >
          <span className="text-accent">/</span>sarthak
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative transition ${
                active === l.href
                  ? "text-white"
                  : "text-fg-muted hover:text-white"
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent" />
              )}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden sm:inline-flex items-center text-sm font-medium px-3.5 py-1.5 rounded-full border border-border-strong hover:border-accent hover:text-white text-fg transition"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
