import SvgIcons from './SvgIcons.tsx';

interface projctDetailsProps {
 name: string;
 type: string;
 projectId: string;
 description: string;
}

const ProjectBox: React.FC<{ projectDetails: projectDetailsProps }> = ({ projectDetails }) => {
  return (
    <div className='project-box'>
      <div className='project-header'>
        <span> {projectDetails.projectId } | { projectDetails.type.toUpperCase() } </span>
            
        <span> 
          <SvgIcons type='github' />
        </span>
      </div>
          
          
      <div className='project-details'>
        <div className='project-image'>
        </div>
            
        <div className='project-info'>
          <h1> { projectDetails.name } </h1>
              
          <p>
           { projectDetails.description }
          </p>
              
          <div className='project-tools'>
          </div>
              
          <a className='preview-btn'>
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