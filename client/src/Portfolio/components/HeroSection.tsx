import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hand-wrapper"
        initial={{ x: "-100%" }}
        animate={{ x: "0", transition: { duration: 0.8, ease: "easeOut" } }}
      >
        <img src="/illustrations/waving-hand.png" alt="Welcome" />
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0", transition: { duration: 0.8, ease: "easeOut" } }}
      >
        <h1>Adebayo Muis</h1>

        <h2>
          <span> Frontend Developer </span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0", transition: { duration: 0.8, ease: "easeOut" } }}
      >
        <p>
          I craft digital experiences that are smooth, scalable, and designed
          with intent, where code becomes my creative medium, blending logic
          with emotion to deliver lasting value and a seamless feel.
        </p>

        <a href="https://x.com/Charmingdc01" target="_blank">
          Say hi on 𝕏 <ExternalLink size={14} />
        </a>
        <Link to="/blog">
          Visit my Blog <ExternalLink size={14} />
        </Link>
        <a href="https://github.com/Charmingdc" target="_blank">
          Connect on Github <ExternalLink size={14} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
