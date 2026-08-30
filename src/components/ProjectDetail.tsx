import { useState, useEffect } from "react";
import type { Project } from "../data/projectsData";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onSelectOtherProject: (projectId: string) => void;
  allProjects: Project[];
}

export function ProjectDetail({
  project,
  onBack,
  onSelectOtherProject,
  allProjects,
}: ProjectDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when project changes and scroll to top
  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  // These fallbacks always resolve to a valid project (list is never empty)
  const prevProject =
    (currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1])!;
  const nextProject =
    (currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0])!;

  return (
    <div
      className="project-detail-view"
      style={
        {
          "--project-accent": project.accentColor,
        } as React.CSSProperties
      }
    >
      {/* Top sticky navigation bar */}
      <header className="project-detail-nav">
        <button
          type="button"
          className="project-back-btn"
          onClick={onBack}
          aria-label="Back to projects overview"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Projects</span>
        </button>

        <div className="project-detail-nav-title">{project.title}</div>
      </header>

      {/* Project Header Banner */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-content">
          <div className="project-detail-badge">{project.category}</div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.shortDesc}</p>

          <div className="project-meta-grid">
            <div className="project-meta-item">
              <span className="project-meta-label">Timeline</span>
              <span className="project-meta-value">{project.timeline}</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Role</span>
              <span className="project-meta-value">{project.role}</span>
            </div>
          </div>

          <div className="project-tags-list">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Image Gallery Showcase */}
      <section className="project-gallery-section">
        <div className="project-gallery-featured-wrap">
          <img
            src={project.gallery[activeImageIndex]?.src || project.image}
            alt={project.gallery[activeImageIndex]?.caption || project.title}
            className="project-gallery-featured-img"
          />
          <div className="project-gallery-caption">
            {project.gallery[activeImageIndex]?.caption || project.title}
          </div>
        </div>

        {project.gallery.length > 1 && (
          <div className="project-gallery-thumbnails">
            {project.gallery.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`project-gallery-thumb-btn ${
                  idx === activeImageIndex ? "active" : ""
                }`}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="project-gallery-thumb-img"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* In-depth Technical Documentation */}
      <main className="project-detail-body">
        {/* Project Overview */}
        <section className="project-detail-block">
          <h2 className="project-detail-heading">Project Overview</h2>
          <p className="project-detail-text">{project.overview}</p>
        </section>

        {/* Technical Specifications */}
        <section className="project-detail-block">
          <h2 className="project-detail-heading">Technical Specifications</h2>
          <div className="project-specs-grid">
            {project.specs.map((spec) => (
              <div key={spec.label} className="project-spec-card">
                <span className="project-spec-label">{spec.label}</span>
                <span className="project-spec-val">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Engineering Innovations */}
        <section className="project-detail-block">
          <h2 className="project-detail-heading">Architecture & Key Innovations</h2>
          <ul className="project-bullet-list">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="project-bullet-item">
                <span className="project-bullet-dot" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Performance Results */}
        <section className="project-detail-block">
          <h2 className="project-detail-heading">Performance Results & Impact</h2>
          <ul className="project-bullet-list">
            {project.results.map((item, idx) => (
              <li key={idx} className="project-bullet-item">
                <span className="project-bullet-dot" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Bottom Navigation between projects */}
      <footer className="project-detail-footer">
        <button
          type="button"
          className="project-next-prev-btn prev"
          onClick={() => onSelectOtherProject(prevProject.id)}
        >
          <span className="nav-sub">Previous Project</span>
          <span className="nav-main">← {prevProject.title}</span>
        </button>

        <button
          type="button"
          className="project-back-center-btn"
          onClick={onBack}
        >
          All Projects
        </button>

        <button
          type="button"
          className="project-next-prev-btn next"
          onClick={() => onSelectOtherProject(nextProject.id)}
        >
          <span className="nav-sub">Next Project</span>
          <span className="nav-main">{nextProject.title} →</span>
        </button>
      </footer>
    </div>
  );
}
