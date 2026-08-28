import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Projectcard({ project }) {
const projectLinks = {
  "01": "/projects/salamng",
  "02": "/projects/quick-delivery",
};
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{project.number}</span>

        <span className="project-category">
          {project.category}
        </span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {projectLinks[project.number] ? (
          <Link
            to={projectLinks[project.number]}
            className="project-link"
          >
            View Case Study
            <ArrowUpRight size={18} />
          </Link>
        ) : (
          <span className="project-link coming-soon">
            Case Study Coming Soon
          </span>
        )}
      </div>
    </article>
  );
}

export default Projectcard;