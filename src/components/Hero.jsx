
import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          SOFTWARE ENGINEERING INTERN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PRANAV
          <br />
          <span>KUMAR</span>
        </motion.h1>

        <h2>{profile.title}</h2>

        <p>
          Building meaningful digital experiences through code,
          creativity and problem-solving.
        </p>

        <div className="hero-buttons">

          {/* Resume Button */}
          <a
            href="/assets/Pranav_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            📄 View Resume ↗
          </a>

          {/* Projects Button */}
          <a href="#projects">
            💻 Explore Projects
          </a>

        </div>

        <div className="hero-socials">

          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a href={`mailto:${profile.email}`}>
            ✉ Email
          </a>

        </div>
      </div>

      <div className="hero-image">
        <img
          src="/assets/profile.jpg.png"
          alt="Pranav Kumar"
          onError={(e) => console.error("Image failed:", e.target.src)}
        />
      </div>

    </section>
  );
}

export default Hero;
