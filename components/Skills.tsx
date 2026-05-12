import { SectionHeading } from "./SectionHeading";
import { skills, certifications, languagesSpoken } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          title="Skills"
          subtitle="The toolkit I reach for, and the practice patterns I rely on."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((group) => (
            <div key={group.label} className="card p-5">
              <div className="text-xs font-mono uppercase tracking-widest text-fg-subtle">
                {group.label}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <div className="text-xs font-mono uppercase tracking-widest text-fg-subtle">
              Certifications
            </div>
            <ul className="mt-3 grid gap-1.5 text-sm text-fg-muted">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <div className="text-xs font-mono uppercase tracking-widest text-fg-subtle">
              Languages
            </div>
            <ul className="mt-3 grid gap-1.5 text-sm text-fg-muted">
              {languagesSpoken.map((l) => (
                <li key={l.name} className="flex items-center justify-between">
                  <span className="text-fg">{l.name}</span>
                  <span className="text-fg-subtle text-xs font-mono">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
