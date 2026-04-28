import HeroSection             from "@/sections/HeroSection";
import FeaturedProjectsSection from "@/sections/FeaturedProjectsSection";
import SkillsSection           from "@/sections/SkillsSection";
import AboutSnippetSection     from "@/sections/AboutSnippetSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <AboutSnippetSection />
    </>
  );
}
