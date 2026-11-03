
import { motion } from "framer-motion";
import "./Achievements.css";

const achievements = [
  {
    number: "200+",
    title: "DSA Problems Solved",
    description: "Practiced data structures and algorithms across LeetCode and GeeksforGeeks.",
    icon: "💻",
    category: "CODING",
  },
  {
    number: "100+",
    title: "Days Coding Streak",
    description: "Maintained a consistent coding practice habit and problem-solving routine.",
    icon: "🔥",
    category: "CONSISTENCY",
  },
  {
    number: "3rd",
    title: "University-Level Debate",
    description: "Secured third prize in Hindi Debate at the CUSAT Arts Fest.",
    icon: "🏆",
    category: "ACHIEVEMENT",
  },
  {
    number: "93",
    title: "JEE Main Percentile",
    description: "Scored 93 percentile in JEE Main 2024.",
    icon: "🎯",
    category: "ACADEMICS",
  },
];

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-heading">
        <p>BEYOND THE CODE</p>
        <h2>Milestones & <span>Achievements</span></h2>
        <p className="achievements-subtitle">
          Small steps, consistent efforts, meaningful progress.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div
            className="achievement-card"
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <div className="achievement-top">
              <span className="achievement-icon">{item.icon}</span>
              <span className="achievement-category">{item.category}</span>
            </div>

            <h3>{item.number}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
