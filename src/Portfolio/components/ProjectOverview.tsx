import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";

const ProjectOverview = ({ project }: { project: Project }) => {
  return (
    <section className="project-overview">
      <h1> {project.name} </h1>

      <div className="quick-action">
        <Link to={`${project.liveUrl}`}>
          <ExternalLink size={18} /> Live URL
        </Link>

        {project?.githubLink ? (
          <Link to={`${project.githubLink}`}>
            <Github size={18} /> Github Repo
          </Link>
        ) : (
          <div>
            <Github size={18} /> No Repo
          </div>
        )}
      </div>

      {/* Description */}
      <p className="project-description"> {project.description} </p>

      <img src={project.imgSources[0]} alt={`${project.name}'s Preview`} />

      <div className="project-details">
        {/* Detailed Description */}
        <div className="info-seperator">
          <h3> Description </h3>

          <p> {project.detailedDescription}</p>
        </div>

        {/* Technologies */}
        <div className="info-seperator">
          <h3> Technologies </h3>

          <div className="project-technologies">
            {project.technologies.map((technology, idx) => (
              <div key={idx}> {technology}</div>
            ))}
          </div>
        </div>

        {/* Type */}
        <div className="info-seperator">
          <h3> Type </h3>

          <p> {project.type}</p>
        </div>

        {/* Date */}
        <div className="info-seperator">
          <h3> Date </h3>

          <p> {project.date}</p>
        </div>

        {/* Gallery */}
        <div className="info-seperator">
          <h3> Gallery </h3>

          <div className="project-images">
            {project.imgSources.map((imgSource, idx) => (
              <img
                key={idx}
                src={imgSource}
                alt={`${project.name}'s Screenshot`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectOverview;
