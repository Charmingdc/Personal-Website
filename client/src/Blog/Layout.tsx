import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "../components/FooterSection.tsx";

import styles from "./styles/font-style.module.css";
import "./styles/style.css";

const Layout = () => {
  return (
    <div className={styles.fontStyles}>
      <header>
        <Navbar />
      </header>

      <main className="blog-main">
        <Outlet />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
};
export default Layout;
