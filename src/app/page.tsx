import { Suspense } from "react";
import HomePage from "./homepage";
import { ContactSection } from "./page_sections/ContactSection";
import ProjectSection from "./page_sections/ProjectsSection";
import { SkillsSection } from "./page_sections/SkillsSection";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <HomePage />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </Suspense>
  );
}
