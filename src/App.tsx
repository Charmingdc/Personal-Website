import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Imported all portfolio related components
const PortfolioLayout = lazy(() => import("./Portfolio/Layout"));
const PortolioPage = lazy(() => import("./Portfolio/pages/Home"));
const ProjectsPage = lazy(() => import("./Portfolio/pages/Projects"));

// Imported all blog related components
const BlogPage = lazy(() => import("./Blog/Posts"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio related routes */}
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<PortolioPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectName" element={<ProjectsPage />} />
        </Route>

        {/* Blog related routes */}
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
