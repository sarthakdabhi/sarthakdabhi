import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/sarthakdabhi",
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@sarthakdabhi",
    href: profile.github,
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@sarthakdabhi",
    href: profile.twitter,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          title="Contact"
          subtitle="Building something interesting, hiring for a staff role, or just want to talk shop? My inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 card p-8 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-widest text-fg-subtle">
                Best way to reach me
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-flex items-baseline gap-2 text-2xl sm:text-3xl font-semibold tracking-tight hover:text-accent transition"
              >
                {profile.email}
                <ArrowUpRight className="h-5 w-5 opacity-70" />
              </a>
              <p className="mt-4 text-fg-muted max-w-md">
                I usually reply within a day or two. Mention what you&apos;re
                working on and what you&apos;re hoping for.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${profile.email}?subject=Hi%20Sarthak`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-fg transition"
                >
                  Say hello
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="card p-4 flex items-center gap-3 group"
                >
                  <Icon className="h-5 w-5 text-fg-muted group-hover:text-white transition" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-fg-subtle font-mono uppercase tracking-widest">
                      {c.label}
                    </div>
                    <div className="truncate text-sm text-fg">{c.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-fg-subtle group-hover:text-white transition" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
