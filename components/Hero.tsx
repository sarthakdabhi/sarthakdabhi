import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <h1
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tightest leading-[1.02] reveal"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="gradient-text">{profile.name}.</span>
        </h1>

        <p
          className="mt-5 max-w-2xl text-lg sm:text-xl text-fg-muted leading-relaxed reveal"
          style={{ animationDelay: "0.25s" }}
        >
          {profile.title} at{" "}
          <span className="text-white font-medium">{profile.company}</span>.{" "}
          {profile.tagline}
        </p>

        <div
          className="mt-7 flex flex-wrap items-center gap-3 reveal"
          style={{ animationDelay: "0.35s" }}
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-fg transition"
          >
            See my work
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-sm font-medium hover:border-accent hover:text-white text-fg transition"
          >
            Contact
          </Link>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-fg-muted hover:text-white hover:bg-white/5 transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-fg-muted hover:text-white hover:bg-white/5 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2 rounded-full text-fg-muted hover:text-white hover:bg-white/5 transition"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div
          className="mt-10 flex items-center gap-2 text-sm text-fg-subtle font-mono reveal"
          style={{ animationDelay: "0.45s" }}
        >
          <MapPin className="h-4 w-4" />
          {profile.location}
        </div>
      </div>
    </section>
  );
}
