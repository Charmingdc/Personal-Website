import SvgIcons from './SvgIcons.tsx';

interface projectDetailsProps {
 name: string;
 type: string;
 githubLink?: string;
 projectId: string;
 imgSource: string;
 description: string;
 stacks: string[];
 liveUrl: string;
}

const ProjectBox: React.FC<{ projectDetails: projectDetailsProps }> = ({ projectDetails }) => {
  return (
    <div className='project-box'>
      <div className='project-header'>
        <span> {projectDetails.projectId } | { projectDetails.type.toUpperCase() } </span>
            
        <a href={projectDetails.githubLink}> 
          <SvgIcons type='github' />
        </a>
      </div>
          
          
      <div className='project-details'>
        <div className='project-image'>
          <img src={projectDetails.imgSource} alt={projectDetails.name} />
        </div>
            
        <div className='project-info'>
          <h1> { projectDetails.name } </h1>
              
          <p>
           { projectDetails.description }
          </p>
              
          <div className='project-stacks'>
            {
              projectDetails.stacks.map((stack: string, index: number) => (
                 <div className='stack' key={index}>
                   { stack.toUpperCase() }
                 </div>
               ))
            }
          </div>
              
          <a href={projectDetails.liveUrl} className='preview-btn'>
            <span> 🌍 </span>
            Live Preview
            <span> <SvgIcons type='rightArrow' width='22px' height='22px' /> </span>
          </a>
        </div>
            
      </div>
    </div>
  )
}


export default ProjectBox;