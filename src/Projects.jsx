import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "SalamNg Digital Growth Strategy",
    category: "Digital Strategy",
    description:
      "A customer journey strategy connecting product discovery, WhatsApp ordering and bespoke consultations.",
    tags: [
      "Customer Journey",
      "WhatsApp",
      "E-commerce",
      "Digital Strategy",
    ],
    link: "/projects/salamng",
  },

  {
    number: "02",
    title: "AgroAI Digital Growth Strategy",
    category: "Digital Strategy & Product Marketing",
    description:
      "A digital growth strategy for an AI-powered crop disease detection platform, focused on reaching farmers, building awareness and driving product adoption.",
    tags: [
      "Digital Strategy",
      "Product Marketing",
      "AI",
      "Customer Acquisition",
    ],
    link: "/projects/agroai",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">04 / PROJECTS</p>

          <h2>
            Selected <span>projects.</span>
          </h2>

          <p className="section-description">
            A selection of digital strategy, marketing and analytics projects
            focused on solving real business problems and improving customer
            experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <Link
                  to={project.link}
                  className="project-link"
                >
                  View Case Study
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;