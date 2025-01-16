import Navbar from './components/Navbar';
import HeroSection from  './components/HeroSection';
import MovingTags from './components/MovingTags'

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
    </main>
   </>
  )
}

export default App