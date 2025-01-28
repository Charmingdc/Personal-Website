import { motion, MotionConfig } from 'motion/react';

import SvgIcons from './SvgIcons.tsx';
import useTools from '../hooks/useTools.tsx';
import ToolBox from './ToolBox.tsx';

interface ToolsProps {
 iconUrl: string;
 altText: string;
}


const ResumeSection = () => {
  const tools: ToolsProps[] = useTools();
  
  const variants = {
   hidden: { opacity: 0, y: '4rem' },
   active: { opacity: 1, y: '0rem' }
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
          <h3> Resume </h3>
        
          <SvgIcons type='rightDownArrow' width='40px' height='40px' />
        </motion.div>
      
        <motion.h1
          className='section-headtitle'
          variants={variants}
          initial="hidden"
          whileInView="active"> 
           The digital journey
         </motion.h1>
      </MotionConfig>
    
      
      
      { /** rsume tools section **/ }
      <p className='resume-tags'>
       [ My favourite tools ]
      </p>
      
      <div className='tools-container'>
        {tools.map((tool, index) => (
          <motion.div 
            key={index}
            whileTap={{ scale: 2, transition: {duration: 0.4, ease: 'easeInOut'} }}>
             <ToolBox toolDetails={tool} />
         </motion.div>
        ))}
</div>
      
    </section>
  )
}

export default ResumeSection;