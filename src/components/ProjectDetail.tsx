import { useState, useEffect } from "react";
import type { Project } from "../data/projectsData";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onSelectOtherProject: (projectId: string) => void;
  allProjects: Project[];
}

/** Renders a string that uses **bold** markers as strong text. */
function RichText({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

export function ProjectDetail({
  project,
  onBack,
  onSelectOtherProject,
  allProjects,
}: ProjectDetailProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Reset active media when project changes and scroll to top
  useEffect(() => {
    setActiveMediaIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  // These fallbacks always resolve to a valid project (list is never empty)
  const prevProject =
    (currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1])!;
  const nextProject =
    (currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0])!;

  const activeMedia = project.gallery[activeMediaIndex];

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

          <div className="project-tags-list">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Media Gallery Showcase */}
      <section className="project-gallery-section">
        <div className="project-gallery-featured-wrap">
          {activeMedia?.type === "video" ? (
            <video
              src={activeMedia.src}
              className="project-gallery-featured-video"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={activeMedia?.src || project.image}
              alt={activeMedia?.caption || project.title}
              className="project-gallery-featured-img"
            />
          )}
          <div className="project-gallery-caption">
            {activeMedia?.caption || project.title}
          </div>
        </div>

        {project.gallery.length > 1 && (
          <div className="project-gallery-thumbnails">
            {project.gallery.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`project-gallery-thumb-btn ${
                  idx === activeMediaIndex ? "active" : ""
                }`}
                onClick={() => setActiveMediaIndex(idx)}
                aria-label={`View media ${idx + 1}`}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="project-gallery-thumb-video"
                    />
                    <span className="thumb-play" aria-hidden="true" />
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="project-gallery-thumb-img"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* In-depth Project Documentation */}
      <main className="project-detail-body">
        {project.sections.map((section, idx) => (
          <section className="project-detail-block" key={idx}>
            <h2 className="project-detail-heading">{section.heading}</h2>
            {section.paragraphs?.map((paragraph, i) => (
              <p className="project-detail-text" key={i}>
                <RichText text={paragraph} />
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="project-bullet-list">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="project-bullet-item">
                    <span className="project-bullet-dot" />
                    <span>
                      <RichText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
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