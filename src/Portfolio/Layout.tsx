import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection.tsx";

import "./styles/index.css";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </>
  );
};
export default Layout;
