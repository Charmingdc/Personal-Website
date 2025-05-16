import { useState, useEffect } from 'react';
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
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const projects: Project[] = useProjects();
  
  const variants = {
    hidden: { opacity: 0, y: '4rem' },
    active: { opacity: 1, y: '0rem' }
  }
  
  
  useEffect(() => {
   if (loadMore) {
    setProjectsList(projects);
   } else {
    setProjectsList(projects.slice(0, 4));
   }
  }, [loadMore]);
  
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
        
           <SvgIcons type='rightDownArrow' width='30px' height='30px' />
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
        {projectsList.map((project, index) => (
          <ProjectBox projectDetails={project} key={index} />
        ))}
      </div>
      
      <button 
       onClick={() => setLoadMore(!loadMore)}
       className="view-more-btn">
        { loadMore ? 'View less' : 'View more' }
      </button>
    </section>
  );
};

export default ProjectSection;