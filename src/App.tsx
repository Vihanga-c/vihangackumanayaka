import { useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ProjectDetail } from "./components/ProjectDetail";
import { PROJECTS } from "./data/projectsData";
import { consumeReturnTarget, scrollToSection } from "./lib/scrollToSection";
import "./index.css";

function PortfolioPage() {
  // When an in-page link like "Back to Projects" brings us here, land on the
  // requested section. Browser back/forward needs no help — the browser
  // restores the scroll position recorded at the time of the push.
  useEffect(() => {
    const target = consumeReturnTarget();
    if (target) {
      requestAnimationFrame(() => scrollToSection(target));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return <Navigate to="/" replace />;
  return <ProjectDetail project={project} allProjects={PROJECTS} />;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;