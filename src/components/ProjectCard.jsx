import { useRef } from "react";
import { ACCENT } from "../data.js";
import { PREVIEWS } from "./previews/index.jsx";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const Preview = PREVIEWS[project.preview];
  const [accentA, accentB] = ACCENT[project.accent] || ACCENT.violet;
  const isLogo = project.mediaType === "logo";
  const hasRoundedPreview = project.roundedPreview === true;
  const logoTone = project.logoTone || "dark";

  const onMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    element.style.setProperty("--mx", `${px * 100}%`);
    element.style.setProperty("--my", `${py * 100}%`);
    element.style.setProperty("--rx", `${(py - 0.5) * -6}deg`);
    element.style.setProperty("--ry", `${(px - 0.5) * 8}deg`);
  };

  const onLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      className="project"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ "--accent-a": accentA, "--accent-b": accentB }}
    >
      <a
        href={project.href || "#"}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noreferrer" : undefined}
        aria-label={project.href ? `Open ${project.title}` : project.title}
      >
        <div className="project-tilt">
          <div className="project-preview-bed">
            <div
              className={`project-preview-media ${
                project.logoBackground === "white" ? "project-preview-media--white" : ""
              } ${isLogo ? `project-preview-media--logo project-preview-media--logo-${logoTone}` : ""}`}
            >
              {project.image ? (
                <img
                  className={`project-preview-image ${isLogo ? "project-preview-image--logo" : ""} ${
                    hasRoundedPreview ? "project-preview-image--rounded" : ""
                  }`}
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  style={{ padding: project.imagePadding || 0 }}
                />
              ) : Preview ? (
                <Preview />
              ) : (
                <div className="preview-fallback" />
              )}
            </div>
          </div>

          <div className="project-glass">
            <div className="project-glass-sheen" />
            <div className="project-content">
              <div className="project-top">
                <span className="project-kind">{project.kind}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-blurb">{project.blurb}</p>
              <div className="project-bottom">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag tag-on-glass">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-cta" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="project-accent-glow" />
        </div>
      </a>
    </article>
  );
}
