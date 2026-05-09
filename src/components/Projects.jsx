import { useMemo, useState } from "react";
import { projects } from "../data.js";
import Glass from "./Glass.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return ["All", ...Array.from(set)];
  }, []);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesTag = filter === "All" || project.tags.includes(filter);

    if (!normalizedSearchTerm) {
      return matchesTag;
    }

    const searchableFields = [project.title, project.kind, project.blurb, project.tags.join(" ")].join(
      " "
    );
    const matchesSearch = searchableFields.toLowerCase().includes(normalizedSearchTerm);

    return matchesTag && matchesSearch;
  });

  return (
    <section id="projects" className="projects-only">
      <Glass className="filter-bar">
        <div className="filter-chip-row">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip ${filter === tag ? "is-on" : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <label className="filter-search" aria-label="Search projects">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M10 2a8 8 0 105.293 14l4.353 4.354 1.414-1.414-4.354-4.353A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"
            />
          </svg>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects..."
          />
        </label>
      </Glass>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
