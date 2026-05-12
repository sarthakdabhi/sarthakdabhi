import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/experience";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Twelve years of shipping. From freelance in Ahmedabad to staff engineering in California — same craft, larger systems."
        />

        <ol className="relative border-l border-border ml-2 space-y-12">
          {experience.map((job) => (
            <li key={job.company} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent transition"
                    >
                      {job.company}
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="font-mono text-xs text-fg-subtle">
                  {job.period}
                </span>
              </div>

              <div className="mt-5 space-y-6">
                {job.roles.map((role) => (
                  <div key={role.title} className="card p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="text-fg font-medium">{role.title}</div>
                      <div className="font-mono text-xs text-fg-subtle">
                        {role.start} — {role.end}
                        {role.location ? ` · ${role.location}` : ""}
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-fg-muted leading-relaxed">
                      {role.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-fg-subtle" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
