import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav>
      <motion.ul
        className="portfolio-nav"
        initial={{ y: "-4rem" }}
        animate={{ y: "0rem", transition: { duration: 0.8, ease: "easeIn" } }}
      >
        <li>
          <h1> Charmingdc.tsx </h1>
        </li>
        <li>
          <button className="switch-toggle" onClick={toggleTheme}>
            <div></div>
          </button>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
