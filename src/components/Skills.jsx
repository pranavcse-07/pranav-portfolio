
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages I use to solve problems.",
    skills: ["C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building interactive user interfaces.",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Creating server-side applications and APIs.",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    number: "04",
    title: "Core Computer Science",
    description: "Fundamentals behind software engineering.",
    skills: ["DSA", "DBMS", "Operating Systems","PHP", "OOP"],
  },
  {
    number: "05",
    title: "Developer Tools",
    description: "Tools I use in my development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Linux Terminal"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY TECH STACK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          SKILLS & <span>EXPERTISE</span>
        </motion.h2>

        <p>Technologies and concepts I work with.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.number}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -7 }}
          >
            <div className="skill-card-top">
              <span className="skill-number">{group.number}</span>
              <span className="skill-symbol">✦</span>
            </div>

            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
