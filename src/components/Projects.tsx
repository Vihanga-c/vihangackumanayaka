import { PROJECTS } from "../data/projectsData";
import type { Project } from "../data/projectsData";

interface ProjectsProps {
  onViewDetails: (projectId: string) => void;
}

export function Projects({ onViewDetails }: ProjectsProps) {
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
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Single project tile (interactive card) ──────────────────────────────────
interface TileProps {
  project: Project;
  onViewDetails: (id: string) => void;
}

function ProjectTile({ project, onViewDetails }: TileProps) {
  const handleClick = () => onViewDetails(project.id);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onViewDetails(project.id);
    }
  };

  return (
    <article
      className="project-tile"
      style={
        {
          "--project-accent": project.accentColor,
          "--tile-gradient": project.gradientBackdrop,
        } as React.CSSProperties
      }
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View full project details for ${project.title}`}
    >
      {/* Image preview */}
      <div className="project-tile-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-tile-img"
          loading="lazy"
        />
        <div className="project-tile-overlay" />
      </div>

      {/* Card body */}
      <div className="project-tile-content">
        <h3 className="project-tile-title">{project.title}</h3>

        {/* Skills / tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="project-tile-tags" aria-label="Project technologies">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tile-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Compact intro */}
        <p className="project-tile-desc">{project.shortDesc}</p>

        {/* Footer View Project action */}
        <div className="project-tile-footer">
          <span className="project-tile-link-text">View Project</span>
          <span className="project-tile-link-icon" aria-hidden="true">
            <svg
              width="18"
              height="18"
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
        </div>
      </div>
    </article>
  );
}

