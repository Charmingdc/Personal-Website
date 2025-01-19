import Navbar from './components/Navbar';
import HeroSection from  './components/HeroSection';
import MovingTags from './components/MovingTags';
import AboutmeSection from './components/AboutmeSection.tsx';

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
    </main>
   </>
  )
}

export default App