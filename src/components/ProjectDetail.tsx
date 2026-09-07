import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { Project, ProjectMediaItem } from "../data/projectsData";
import { setReturnTarget } from "../lib/scrollToSection";

interface ProjectDetailProps {
  project: Project;
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

/** Media renderer component for inline or hero media without letterboxing or cropping */
function MediaBlock({
  media,
  className = "",
}: {
  media: ProjectMediaItem;
  className?: string;
}) {
  const alignClass = media.align ? `align-${media.align}` : "align-right";

  return (
    <div className={`project-media-card ${alignClass} ${className}`}>
      {media.type === "video" ? (
        <video
          src={media.src}
          className="project-media-video"
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={media.src}
          alt={media.alt || "Project showcase"}
          className="project-media-img"
          loading="lazy"
        />
      )}
    </div>
  );
}

export function ProjectDetail({
  project,
  allProjects,
}: ProjectDetailProps) {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
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
        <Link
          to="/"
          className="project-back-btn"
          onClick={() => setReturnTarget("projects")}
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
        </Link>

        <div className="project-detail-nav-title">{project.title}</div>
      </header>

      {/* Main Content Container */}
      <main className="project-detail-main">
        {/* Project Header Banner / Hero Section */}
        <section
          className={`project-detail-hero ${
            project.heroLayout === "media-left" ? "hero-media-left" : ""
          } ${project.heroMedia ? "has-hero-media" : ""}`}
        >
          {/* Hero Media (if present) */}
          {project.heroMedia && (
            <MediaBlock media={project.heroMedia} className="project-hero-media" />
          )}

          <div className="project-detail-hero-content">
            <div className="project-detail-badge">{project.category}</div>
            <h1 className="project-detail-title">{project.title}</h1>

            <div className="project-tags-list">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {project.shortDesc && (
              <p className="project-detail-subtitle">{project.shortDesc}</p>
            )}
          </div>
        </section>

        {/* Project In-Depth Documentation Sections */}
        <div className="project-detail-body">
          {project.sections.map((section, idx) => (
            <section className="project-detail-block" key={idx}>
              <h2 className="project-detail-heading">{section.heading}</h2>

              {section.media && <MediaBlock media={section.media} />}

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
        </div>
      </main>

      {/* Bottom Navigation between projects */}
      <footer className="project-detail-footer">
        <Link
          to={`/projects/${prevProject.id}`}
          className="project-next-prev-btn prev"
        >
          <span className="nav-sub">Previous Project</span>
          <span className="nav-main">← {prevProject.title}</span>
        </Link>

        <Link
          to="/"
          className="project-back-center-btn"
          onClick={() => setReturnTarget("projects")}
        >
          All Projects
        </Link>

        <Link
          to={`/projects/${nextProject.id}`}
          className="project-next-prev-btn next"
        >
          <span className="nav-sub">Next Project</span>
          <span className="nav-main">{nextProject.title} →</span>
        </Link>
      </footer>
    </div>
  );
}