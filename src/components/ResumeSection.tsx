import SvgIcons from './SvgIcons.tsx';
import useTools from '../hooks/useTools.tsx';
import ToolBox from './ToolBox.tsx';

interface ToolsProps {
 iconUrl: string;
 altText: string;
}


const ResumeSection = () => {
  const tools: ToolsProps = useTools();
  
  
  return (
    <section>
      <div className='section-headtag'>
        <h3> Resume </h3>
        <SvgIcons type='rightDownArrow' />
      </div>
      
      <h2 className='section-headtitle'>
        The digital journey 
      </h2>
      
      
      
      { /** rsume tools section **/ }
      <p className='resume-tags'>
       [ My favourite tools ]
      </p>
      
      <div className='tools-container'>
        { 
         tools.map((tool, index) => (
           <ToolBox key={index} toolDetails={tool} />
         ))
        }
      </div>
    </section>
  )
}

export default ResumeSection;