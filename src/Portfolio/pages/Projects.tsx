import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProjectSection from "../components/ProjectSection";
import ProjectOverview from "../components/ProjectOverview";
import BackButton from "../components/BackButton";

import useProjects from "../hooks/useProjects";
import type { Project } from "../types";

import "../styles/projects.css";

const Projects = () => {
  const { projectName } = useParams();
  const projects = useProjects();

  const [clickedProject, setClickedProject] = useState<Project | undefined>(
    undefined
  );

  useEffect(() => {
    setClickedProject(projects.find(project => project.name === projectName));
  }, [projectName]);

  return (
    <main>
      <section className="intro-div">
        <BackButton />

        {!clickedProject && <h1> Here are my recent projects </h1>}
      </section>

      {clickedProject ? (
        <ProjectOverview project={clickedProject} />
      ) : (
        <ProjectSection projectsPage={true} />
      )}
    </main>
  );
};
export default Projects;
