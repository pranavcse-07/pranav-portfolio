
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "LEDGER",
    subtitle: "Expense Tracker",
    description:
      "A full-stack expense management application to track income and expenses, manage transactions, and visualize financial summaries.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Secure user authentication",
      "Income and expense management",
      "Category filters and search",
      "Interactive financial charts",
    ],
    github: null,
    category: "FULL STACK DEVELOPMENT",
  },
  {
    number: "02",
    title: "EMPLOYEE",
    subtitle: "Management System",
    description:
      "A role-based employee management application with separate admin and employee dashboards and task management functionality.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
    features: [
      "Admin and employee login",
      "Task creation and assignment",
      "Task status tracking",
      "Employee dashboard",
    ],
    github: null,
    category: "FRONTEND DEVELOPMENT",
  },
  {
    number: "03",
    title: "FASALNIRNAY",
    subtitle: "Smart Agriculture Decision System",
    description:
      "A decision intelligence system that analyzes crop storage conditions and market information to help farmers make better selling and storage decisions.",
    technologies: ["Node.js", "Express", "JavaScript", "REST API"],
    features: [
      "Crop storage risk analysis",
      "Expected loss estimation",
      "Safe storage window",
      "Sell or store recommendations",
    ],
    github: "https://github.com/bhargavalok/FasalNirnay",
    category: "BACKEND & DECISION INTELLIGENCE",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY CREATIVE WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FEATURED <span>PROJECTS</span>
        </motion.h2>

        <p className="projects-subtitle">
          A collection of things I've built, explored and learned.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-title">
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-features">
              {project.features.map((feature) => (
                <span key={feature}>✦ {feature}</span>
              ))}
            </div>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SOURCE CODE ↗
                </a>
              ) : (
                <span className="project-link-placeholder">
                  SOURCE LINK COMING SOON
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
