import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SkillsMarquee } from "@/components/SkillsMarquee";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <ExperienceTimeline />
        <ProjectGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
