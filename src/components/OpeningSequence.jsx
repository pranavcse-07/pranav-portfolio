
import { motion } from "framer-motion";
import "./OpeningSequence.css";

function OpeningSequence({ onComplete }) {
  return (
    <motion.section
      className="opening-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="opening-label"
        initial={{ opacity: 0, letterSpacing: "2px" }}
        animate={{ opacity: 1, letterSpacing: "8px" }}
        transition={{ duration: 1.5 }}
      >
        A PORTFOLIO ORIGINAL
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        PRANAV
        <span> THE SERIES</span>
      </motion.h1>

      <motion.p
        className="opening-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        CODE. CREATE. INNOVATE.
      </motion.p>

      <motion.button
        className="opening-button"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        ENTER PORTFOLIO
      </motion.button>

      <p className="opening-footer">CREATED BY PRANAV KUMAR</p>
    </motion.section>
  );
}

export default OpeningSequence;
