
import { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
