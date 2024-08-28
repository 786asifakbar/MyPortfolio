
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ParticlesBackground from './ParticlesBackground';
const App = () => {
  return (
<>     
      <Navbar />
      {/* <ParticlesBackground /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
</>
  );
};

export default App;