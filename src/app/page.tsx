import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import ProjectsSection from "./components/ProjectsSection";

async function loadMobileDevelopmentData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Page() {
  await loadMobileDevelopmentData();

  return (
    <main>
      <NavigationBar />
      <HeroSection />

      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
