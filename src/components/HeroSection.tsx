import { motion } from 'motion/react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div 
        initial={{ x: '-100%' }} 
        animate={{ x: '0', transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <p>
          Hi, I'm Adebayo Muis
        </p>
        
        <h1>
          Creative 
          <span> Frontend </span>
          Developer
        </h1>
      </motion.div>
      
      <motion.div 
        initial={{ y: '-10rem' }} 
        animate={{ y: '0', transition: { duration: 0.8, ease: 'easeOut' } }}>
        <img 
          src="/illustrations/astronaut.png.webp"
          alt="Astronaut" 
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;