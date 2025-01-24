import { motion } from 'motion/react';

import { useTheme } from '../contexts/ThemeContext.tsx';
import SvgIcons from './SvgIcons.tsx';


const Navbar = () => {
 const { toggleTheme } = useTheme();
 
 
  return (
   <nav>
    <motion.ul 
      initial={{ y: '-4rem' }}
      animate={{ y: '0rem', transition: { duration: 0.8, ease: 'easeIn'} }}>
      <li>
        <a href='https://github.com/Charmingdc' className='nav-dp'>
         <SvgIcons type='github' width='30px' height='30px' />
        </a>
        <h1> Charmingdc </h1>
      </li>
      <li> 
        <button className='switch-toggle' onClick={toggleTheme}>
         <div></div>
        </button> 
       </li>
    </motion.ul>
   </nav>
  )
}

export default Navbar