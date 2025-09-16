import Contact from "@/app/(home)/_components/contact";
import Education from "@/app/(home)/_components/education";
import Experience from "@/app/(home)/_components/experience";
import Hero from "@/app/(home)/_components/hero";
import Projects from "@/app/(home)/_components/projects";
import Skills from "@/app/(home)/_components/skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 py-10">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
