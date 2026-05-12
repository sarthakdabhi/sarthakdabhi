import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";
import { education } from "@/data/experience";

const stats = [
  { value: "12+", label: "Years building software" },
  { value: "$100K", label: "Annual cloud spend cut at RxPrep" },
  { value: "2", label: "Platforms architected at Tebra" },
  { value: "13", label: "Open‑source repos on GitHub" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-fg leading-relaxed text-lg">
            <p>{profile.bio}</p>
            <p className="text-fg-muted text-base">{profile.longBio}</p>
          </div>

          <aside className="space-y-5">
            <div className="card p-5">
              <div className="text-xs font-mono text-fg-subtle uppercase tracking-widest">
                Now
              </div>
              <div className="mt-2 text-fg">
                Staff Software Engineer at{" "}
                <span className="text-white font-medium">Tebra</span>
              </div>
              <div className="mt-1 text-sm text-fg-muted">
                Building the Practice Content + Widgets platform.
              </div>
            </div>

            <div className="card p-5">
              <div className="text-xs font-mono text-fg-subtle uppercase tracking-widest">
                Education
              </div>
              <ul className="mt-2 space-y-3">
                {education.map((e) => (
                  <li key={e.school}>
                    <div className="text-fg">{e.degree}</div>
                    <div className="text-sm text-fg-muted">{e.school}</div>
                    <div className="text-xs font-mono text-fg-subtle mt-0.5">
                      {e.years}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-6">
              <div className="text-3xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-fg-muted leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
