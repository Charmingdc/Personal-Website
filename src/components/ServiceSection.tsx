import { motion, MotionConfig } from 'motion/react';
import SvgIcons from './SvgIcons.tsx';

const ServiceSection = () => {
 const variants = {
   hidden: { opacity: 0, y: '4rem'},
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
           <h3> Services </h3>
        
           <SvgIcons type='rightDownArrow' width='40px' height='40px' />
        </motion.div>
      
        <motion.h1
          className='section-headtitle'
          variants={variants}
          initial="hidden"
          whileInView="active"> 
           Creating impactful projects
        </motion.h1>
      
      
      
        <p>
          Here are some of the services I offer :)
        </p>
      
     
        <div className='services-container'>
          <motion.div 
            variants={variants}
            initial="hidden"
            whileTap={{ scale: 1.2 }}
            whileInView="active">
            <h2> 🚀 Web Development </h2>
          
            <p>
             I design and craft beautiful websites and seamless experiences with ReactJs, CSS, Tailwind, Typescript, and JavaScript.
            </p>
          </motion.div>
        
          <motion.div
            variants={variants}
            initial="hidden"
            whileTap={{ scale: 1.2 }}
            whileInView="active">
            <h2> 🚀 API Integrations </h2>
          
            <p>
              Integrating backend services and APIs to the frontend securely to fetch and display data in real time.
            </p>
          </motion.div>
        
          <motion.div
            variants={variants}
            initial="hidden"
            whileTap={{ scale: 1.2 }}
            whileInView="active">
            <h2> 🚀 Responsive Design </h2>
          
            <p>
              Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.
            </p>
          </motion.div>
        
          <motion.div 
           variants={variants}
            initial="hidden"
            whileTap={{ scale: 1.2 }}
            whileInView="active">
            <h2> 🚀 Version Control </h2>
          
            <p>
              Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.
            </p>
          </motion.div>
       
        </div>
      </MotionConfig>
    </section>
  )
}


export default ServiceSection;