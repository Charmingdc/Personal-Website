import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "../components/FooterSection.tsx";

import styles from "./styles/font-style.module.css";
import "./styles/index.css";

const Layout = () => {
  return (
    <div className={styles.fontStyle}>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
};
export default Layout;
