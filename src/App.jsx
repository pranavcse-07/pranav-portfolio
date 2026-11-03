
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import OpeningSequence from "./components/OpeningSequence";
import ProfileCards from "./components/ProfileCards";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  const [showProfiles, setShowProfiles] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // SCREEN 1: Opening Sequence
  if (!showProfiles) {
    return (
      <OpeningSequence
        onComplete={() => setShowProfiles(true)}
      />
    );
  }

  // SCREEN 2: Profile Selection
  if (!selectedProfile) {
    return (
      <ProfileCards
        onSelect={(profileId) => setSelectedProfile(profileId)}
      />
    );
  }

  // SCREEN 3: Main Portfolio
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Navbar />

      <main>
        <Hero />

        {/* RECRUITER PROFILE */}
        {selectedProfile === "recruiter" && (
          <>
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
          </>
        )}

        {/* DEVELOPER PROFILE */}
        {selectedProfile === "developer" && (
          <>
            <Projects />
            <Skills />
            <Experience />
            <Achievements />
          </>
        )}

        {/* EXPLORER PROFILE */}
        {selectedProfile === "explorer" && (
          <>
            <Projects />
            <Skills />
            <Experience />
            <Achievements />
          </>
        )}

        <Contact />
        <ScrollToTop/>
      </main>
    </motion.div>
  );
}

export default App;
