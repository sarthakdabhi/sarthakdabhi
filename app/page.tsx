import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Search — Plug Widgets renders inline at this element. */}
        <section id="search" aria-label="Search this site" className="pb-8">
          <div className="mx-auto max-w-3xl px-6">
            <div id="pw-widget" className="mb-4" />
            <Script
              src="https://cdn.plugwidgets.com/widget.js"
              data-token="90b2902b-9829-4147-bbc9-903a57613de0"
              async
              data-target="#pw-widget"
            />
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <div className="divider" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6">
          <div className="divider" />
        </div>
        <Experience />
        <div className="mx-auto max-w-6xl px-6">
          <div className="divider" />
        </div>
        <Projects />
        <div className="mx-auto max-w-6xl px-6">
          <div className="divider" />
        </div>
        <Skills />
        <div className="mx-auto max-w-6xl px-6">
          <div className="divider" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
