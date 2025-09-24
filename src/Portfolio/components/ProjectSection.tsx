import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, MotionConfig } from "motion/react";
import { ChevronRight } from "lucide-react";
import SvgIcons from "./SvgIcons.tsx";
import ProjectBox from "./ProjectBox.tsx";
import useProjects from "../hooks/useProjects.tsx";
import type { Project } from "../types";

const ProjectSection = ({
  projectsPage = false
}: {
  projectsPage?: boolean;
}) => {
  const navigate = useNavigate();
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const projects: Project[] = useProjects();

  const variants = {
    hidden: { opacity: 0, y: "4rem" },
    active: { opacity: 1, y: "0rem" }
  };

  useEffect(() => {
    if (projectsPage) setProjectsList(projects);
    else setProjectsList(projects.slice(0, 4));
  }, []);

  return (
    <section>
      {projectsPage || (
        <MotionConfig transition={{ duration: 1, ease: "easeOut" }}>
          <motion.div
            className="section-headtag"
            variants={variants}
            initial="hidden"
            whileInView="active"
          >
            <h3> Portfolio </h3>

            <SvgIcons type="rightDownArrow" width="30px" height="30px" />
          </motion.div>

          <motion.h1
            className="section-headtitle"
            variants={variants}
            initial="hidden"
            whileInView="active"
          >
            Design, tech & some magics
          </motion.h1>
        </MotionConfig>
      )}

      {projectsPage || (
        <p>
          Blending mixes of the latest technologies to create innovative and
          problem-solving projects. Here are some of my works.
        </p>
      )}

      <div className="projects-container">
        {projectsList.map((project, index) => (
          <ProjectBox projectDetails={project} key={index} />
        ))}
      </div>

      {projectsPage || (
        <button className="view-all-btn" onClick={() => navigate("/projects")}>
          View all <ChevronRight />
        </button>
      )}
    </section>
  );
};

export default ProjectSection;
