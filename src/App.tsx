import { useState } from "react";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ProjectDetail } from "./components/ProjectDetail";
import { PROJECTS } from "./data/projectsData";
import "./index.css";

export function App() {
  // null = portfolio view; string = project detail view for that id
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = activeProjectId
    ? PROJECTS.find((p) => p.id === activeProjectId) ?? null
    : null;

  if (activeProject) {
    return (
      <ProjectDetail
        project={activeProject}
        allProjects={PROJECTS}
        onBack={() => {
          setActiveProjectId(null);
          // Restore scroll position to projects section after a frame
          requestAnimationFrame(() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          });
        }}
        onSelectOtherProject={(id) => setActiveProjectId(id)}
      />
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects onViewDetails={(id) => setActiveProjectId(id)} />
        <Contact />
      </main>
    </>
  );
}

export default App;