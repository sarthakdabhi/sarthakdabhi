import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const langDot: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-sky-400",
  PHP: "bg-indigo-400",
  HTML: "bg-orange-400",
  CSS: "bg-blue-400",
};

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Selected projects"
          subtitle="Open source experiments, frameworks, and educational games. The full list lives on GitHub."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.name} className="card p-5 flex flex-col relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-white font-medium tracking-tight">
                  <Github className="h-4 w-4 text-fg-muted" />
                  {p.name}
                </div>
                <ArrowUpRight className="h-4 w-4 text-fg-subtle transition group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="mt-3 text-sm text-fg-muted leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-fg-subtle font-mono">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      langDot[p.language] ?? "bg-fg-subtle"
                    }`}
                  />
                  {p.language}
                </span>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-1 hover:text-white transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    live demo
                  </a>
                )}
              </div>

              {/* Stretched link covering the whole card */}
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name} on GitHub`}
                className="absolute inset-0 rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://github.com/sarthakdabhi?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-white transition"
          >
            View all repositories on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
