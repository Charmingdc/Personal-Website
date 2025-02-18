import { motion } from 'motion/react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ x: '-100%' }} 
        animate={{ x: '0', transition: { duration: 0.8, ease: 'easeOut' } }}>
        <h1>
          Adebayo Muis
        </h1>
        
        <h2>
         <span> Frontend Engineer </span>
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ x: '100%' }} 
        animate={{ x: '0', transition: { duration: 0.8, ease: 'easeOut' } }}>
        <p>
          Building the web, crafting seamless experiences, and ensuring every click leaves an impact.
          
          I believe great design goes beyond visuals—it resonates, connects, and evokes emotion. 💻❤️
        </p>
      </motion.div>
    </section>
  );
}

export default HeroSection;