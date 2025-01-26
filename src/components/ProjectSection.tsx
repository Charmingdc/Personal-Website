import { motion, MotionConfig } from 'motion/react';

import SvgIcons from './SvgIcons.tsx';
import ProjectBox from './ProjectBox.tsx';
import useProjects from '../hooks/useProjects.tsx';

interface Project {
  name: string;
  projectId: string;
  githubLink?: string;
  imgSource: string;
  type: string;
  description: string;
  stacks: string[];
  liveUrl: string;
}

const ProjectSection = () => {
  const projects: Project[] = useProjects();
  
  const variants = {
    hidden: { opacity: 0 },
    active: { opacity: 1 }
  }
  
  return (
    <section>
       <MotionConfig 
        transition={{ duration: 1, ease: 'easeOut'}}>
         <motion.div 
          className='section-headtag'
          variants={variants}
          initial="hidden"
          whileInView="active">
           <h3> Portfolio </h3>
        
           <SvgIcons type='rightDownArrow' width='40px' height='40px' />
        </motion.div>
      
        <motion.h1
          className='section-headtitle'
          variants={variants}
          initial="hidden"
          whileInView="active"> 
           Design, tech & some magics
        </motion.h1>
      </MotionConfig>
     
      
      <p>
        Blending mixes of the latest technologies to create innovative and problem-solving projects. Here are some of my works.
      </p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectBox projectDetails={project} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;