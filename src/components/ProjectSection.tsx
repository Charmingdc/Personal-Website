import SvgIcons from './SvgIcons.tsx';
import ProjectBox from './ProjectBox.tsx';

interface Project {
 name: string;
 projectId: string;
 type: string;
 description: string;
}

const ProjectSection = () => {
  const projects: Project[] = [
       {
     name: 'ScrollJs',
     projectId: '01',
     type: 'Javascript library',
     description: 'A lightweight javascript library for adding animation on scroll effects (AOS) to elements with the flexibility of passing custom animations and callback functions.',
    },
    {
     name: 'MindEcho',
     projectId: '02',
     type: 'mental health',
     description: 'A mental health web app that helps manage users mental wellbeing by providing mindfullness tools such as mood logging, soul calming soundscapes and an AI mental coach.',
    },
    {
     name: 'HostImg',
     projectId: '03',
     type: 'Image hosting',
     description: 'A image hosting website where you can host your images and share them with anyone you want. You can get the img source link, html codes to display them and preview link to view your images.'
    }
  ];
  
  
  return (
    <section>
      <div className='section-headtag'>
        <h3> Portfolio </h3>
        <SvgIcons type='rightDownArrow' />
      </div>
      
      <h2 className='section-headtitle'>
        Design, tech & some magic 
      </h2>
      
      <p> 
        Blending mixes of latest technologies to create innovatives and problem-solving projects, Here some of my works.
      </p>
      
      <div className='projects-container'>
        { 
          projects.map((project, index) => (
           <ProjectBox projectDetails={project} key={index} />
         ))
        }
      </div>
    </section>
  )
}


export default ProjectSection;