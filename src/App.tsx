import Navbar from './components/Navbar';
import HeroSection from  './components/HeroSection';
import AboutmeSection from './components/AboutmeSection.tsx';
// import ServiceSection from './components/ServiceSection.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import ResumeSection from './components/ResumeSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import FooterSection from './components/FooterSection.tsx';

import './App.css'

const App = () => {
 return (
   <>
    <header>
      <Navbar />
    </header>
    
    <main>
      <HeroSection />
      <AboutmeSection />
      {/** <ServiceSection /> **/}
      <ProjectSection />
      <ResumeSection /> 
      <ContactSection />
    </main>
    
    <footer>
      <FooterSection />
    </footer>
   </>
  )
}

export default App