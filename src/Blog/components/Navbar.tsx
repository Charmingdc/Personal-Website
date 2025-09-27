import { Link } from "react-router-dom";
import { motion } from "motion/react";

const routes: { text: string; url: string }[] = [
  { text: "cd home", url: "/blog" },
  { text: "cd portfolio", url: "/" },
  { text: "cd email", url: "mailto:charmingdc002@gmail.com" }
];

const Navbar = () => {
  return (
    <nav>
      <motion.ul
        className="blog-nav"
        initial={{ y: "-4rem" }}
        animate={{ y: "0rem", transition: { duration: 0.8, ease: "easeIn" } }}
      >
        <li>
          <span className="current-dir"> ~/blog $</span>
        </li>

        {routes.map((route, idx) => (
          <li key={idx}>
            {route.text === "Email" ? (
              <a href={route.url}> {route.text} </a>
            ) : (
              <Link to={route.url}> {route.text} </Link>
            )}
          </li>
        ))}

        <li>
          <div className="cursor"></div>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
