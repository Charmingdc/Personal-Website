import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import type { Project } from "../types";
// import SvgIcons from './SvgIcons.tsx';

const ProjectBox: React.FC<{ projectDetails: Project }> = ({
  projectDetails
}) => {
  const navigate = useNavigate();
  const variants = {
    hidden: { opacity: 0, y: "4rem" },
    active: { opacity: 1, y: "0rem" }
  };

  return (
    <motion.div
      className="project-box"
      variants={variants}
      initial="hidden"
      whileTap={{ scale: 1.2 }}
      whileInView="active"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="project-image">
        <img
          src={projectDetails.imgSources[0]}
          alt={`${projectDetails.name} preview`}
        />
      </div>

      <div className="project-info">
        <h2> {projectDetails.name} </h2>

        <p>{projectDetails.description}</p>

        <button
          onClick={() => navigate(`/projects/${projectDetails.name}`)}
          className="project-cta"
        >
          View Project <ChevronRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
