import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    type: "EDUCATION",
    period: "2024 — 2028",
    title: "B.Tech — Computer Science & Engineering",
    organization: "Cochin University of Science and Technology (CUSAT)",
    description:
      "Currently pursuing a Bachelor of Technology in Computer Science and Engineering, building a strong foundation in programming, data structures, algorithms and software development.",
    details: ["B.Tech CSE", "CGPA: 7.85"],
  },
  {
    type: "INTERNSHIP",
    period: "6 WEEKS",
    title: "MERN Stack Development Intern",
    organization: "BeeSkilled — Virtual Internship",
    description:
      "Worked on backend development using Node.js and Express.js. Created REST APIs, designed MongoDB schemas and integrated frontend applications with backend services.",
    details: [
      "Node.js & Express.js",
      "MongoDB",
      "REST API Development",
    ],
  },
  {
    type: "EDUCATION",
    period: "2022 — 2023",
    title: "Class XII — Science (PCM)",
    organization: "Raj Narayan College, Hajipur",
    description:
      "Completed higher secondary education with Physics, Chemistry and Mathematics.",
    details: ["Science (PCM)", "81.2%"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-heading">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THE JOURNEY SO FAR
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education <span>& Experience</span>
        </motion.h2>

        <p className="experience-subtitle">
          Every step is part of the journey.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-card-top">
                <span className="experience-type">{item.type}</span>
                <span className="experience-period">{item.period}</span>
              </div>

              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-tags">
                {item.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;