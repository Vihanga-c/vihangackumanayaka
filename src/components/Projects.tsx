import { useEffect, useState } from "react";
import { PROJECTS } from "../data/projectsData";
import type { Project } from "../data/projectsData";

interface ProjectsProps {
  onViewDetails: (projectId: string) => void;
}

export function Projects({ onViewDetails }: ProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    if (!expandedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expandedId]);

  const toggleExpand = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-inner">
        <div className="projects-header">
          <h2 id="projects-title" className="projects-title">
            My Projects
          </h2>
          <p className="projects-subtitle">
            Engineering systems built from first principles — from embedded
            firmware to full mechanical assemblies.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectTile
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => toggleExpand(project.id)}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Single tile ──────────────────────────────────────────────────────────────
interface TileProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  onViewDetails: (id: string) => void;
}

function ProjectTile({ project, isExpanded, onToggle, onViewDetails }: TileProps) {
  return (
    <article
      className={`project-tile${isExpanded ? " project-tile--expanded" : ""}`}
      style={
        isExpanded
          ? ({ "--tile-gradient": project.gradientBackdrop } as React.CSSProperties)
          : undefined
      }
    >
      {/* Image area — always visible */}
      <div className="project-tile-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-tile-img"
          loading="lazy"
        />
        <div className="project-tile-overlay" />
        <div className="project-tile-bottom">
          <span className="project-tile-name">{project.title}</span>
          <button
            type="button"
            className={`project-tile-plus${isExpanded ? " is-close" : ""}`}
            onClick={onToggle}
            aria-label={isExpanded ? `Collapse ${project.title}` : `Expand ${project.title}`}
            aria-expanded={isExpanded}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isExpanded ? (
                <>
                  <line x1="2" y1="2" x2="12" y2="12" />
                  <line x1="12" y1="2" x2="2" y2="12" />
                </>
              ) : (
                <>
                  <line x1="7" y1="1" x2="7" y2="13" />
                  <line x1="1" y1="7" x2="13" y2="7" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded body — slides in below image */}
      <div className="project-tile-expand-body">
        <div className="project-tile-expand-text">
          <h3 className="project-tile-expand-title">{project.title}</h3>
          <p className="project-tile-expand-desc">{project.shortDesc}</p>
        </div>
        <button
          type="button"
          className="project-tile-arrow"
          onClick={() => onViewDetails(project.id)}
          style={{ "--project-accent": project.accentColor } as React.CSSProperties}
          aria-label={`View full project details for ${project.title}`}
        >
          <span className="project-tile-arrow-label">Explore Project</span>
          <span className="project-tile-arrow-icon" aria-hidden="true">
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </button>
      </div>
    </article>
  );
}
