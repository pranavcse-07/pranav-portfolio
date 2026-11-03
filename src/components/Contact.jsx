
import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
import "./Contact.css";

const socials = [
  { name: "GitHub", url: profile.socialLinks.github, icon: "⌘" },
  { name: "LinkedIn", url: profile.socialLinks.linkedin, icon: "in" },
  { name: "LeetCode", url: profile.socialLinks.leetcode, icon: "⚡" },
  {
    name: "GeeksforGeeks",
    url: profile.socialLinks.geeksforgeeks,
    icon: "G",
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="contact-eyebrow">THE NEXT CHAPTER STARTS HERE</p>

        <h2>
          LET'S BUILD
          <br />
          <span>SOMETHING GREAT.</span>
        </h2>

        <p className="contact-description">
          Have an opportunity, an interesting idea, or just want to connect?
          I'd love to hear from you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="contact-email-button"
        >
          GET IN TOUCH <span>↗</span>
        </a>

        <div className="contact-socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <span className="social-icon">{social.icon}</span>
              {social.name}
              <span className="social-arrow">↗</span>
            </a>
          ))}
        </div>
      </motion.div>

      <footer className="portfolio-footer">
        <a href="#home" className="footer-logo">
          PRANAV<span>.</span>
        </a>

        <p>Designed & Built with passion and code.</p>

        <p>© {new Date().getFullYear()} Pranav Kumar. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
