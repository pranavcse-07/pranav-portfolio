
import { motion } from "framer-motion";
import "./ProfileSelector.css";

const profiles = [
  {
    id: "recruiter",
    name: "Recruiter",
    description: "Explore my experience and achievements",
    icon: "💼",
    color: "#e50914",
  },
  {
    id: "developer",
    name: "Developer",
    description: "Explore my skills and projects",
    icon: "💻",
    color: "#2563eb",
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Explore my complete journey",
    icon: "🧭",
    color: "#16a34a",
  },
];

function ProfileCards({ onSelect }) {
  return (
    <div className="profile-screen">
      <motion.h1
        className="profile-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        WHO'S WATCHING?
      </motion.h1>

      <p className="profile-description">
        Choose your experience
      </p>

      <div className="profile-container">
        {profiles.map((profile, index) => (
          <motion.button
            key={profile.id}
            type="button"
            className="profile-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              console.log("Selected profile:", profile.id);
              onSelect(profile.id);
            }}
          >
            <div
              className="profile-icon"
              style={{ backgroundColor: profile.color }}
            >
              <span>{profile.icon}</span>
            </div>

            <h2>{profile.name}</h2>

            <p>{profile.description}</p>

            <span className="profile-choose">
              SELECT PROFILE →
            </span>
          </motion.button>
        ))}
      </div>

      <p className="profile-footer">
        PRANAV — THE SERIES
      </p>
    </div>
  );
}

export default ProfileCards;
