import { useEffect } from "react";
import type { Project } from "../data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onViewDetails: (projectId: string) => void;
}

export function ProjectModal({
  project,
  onClose,
  onViewDetails,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      style={{
        background: project.gradientBackdrop,
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-modal-image"
          />
          <div className="project-modal-image-overlay">
            <h3 id="modal-project-title" className="project-modal-title">
              {project.title}
            </h3>
            <button
              type="button"
              className="project-close-btn"
              onClick={onClose}
              aria-label="Close project modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="project-modal-body">
          <p className="project-modal-description">{project.shortDesc}</p>

          <div className="project-modal-actions">
            <button
              type="button"
              className="project-arrow-btn"
              onClick={() => onViewDetails(project.id)}
              style={
                {
                  "--project-accent": project.accentColor,
                } as React.CSSProperties
              }
              aria-label={`View full project details for ${project.title}`}
            >
              <span className="project-arrow-text">Explore Project Details</span>
              <span className="project-arrow-icon">
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
        </div>
      </div>
    </div>
  );
}
