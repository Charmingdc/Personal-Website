import Navbar from './components/Navbar';
import HeroSection from  './components/HeroSection';
import MovingTags from './components/MovingTags';
import AboutmeSection from './components/AboutmeSection.tsx';
import ServiceSection from './components/ServiceSection.tsx';

import './App.css'

const App = () => {
 return (
   <>
    <header>
      <Navbar />
    </header>
    
    <main>
      <HeroSection />
      <MovingTags />
      <AboutmeSection />
      <ServiceSection />
    </main>
   </>
  )
}

export default App