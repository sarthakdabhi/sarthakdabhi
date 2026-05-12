import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
