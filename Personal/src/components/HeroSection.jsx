import { Button } from '@mui/material';
import Typical from 'react-typical';
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Skills from "./Skills"

const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 
        bg-gradient-to-r from-gray-900 to-blue-900"
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        {/* Left Side: Heading with Typing Effect and Buttons */}
        <div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          <h1 className="text-8xl font-bold text-white">
            I am <br />{' '}
            <Typical
              steps={['Asif Akbar', 3000, 'FrontEnd Developer', 6000]}
              loop={Infinity}
              wrapper="span"
              className="text-blue-600"
            />
          </h1>
          <p className="text-2xl mt-5 mb-6 text-white">
            Master the most in-demand technologies and <br />become a full-stack developer.
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-4">
            <Button 
              variant="contained" 
              color="primary" 
              className="bg-blue-600 text-white"
              data-aos="zoom-in"
              data-aos-delay="2000"
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              className="border-blue-600 text-blue-600"
              data-aos="zoom-in"
              data-aos-delay="2000"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div 
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-delay="2000"
        >
          {/* Main Image */}
          <img
            src="../src/assets/hero.png" // Replace with your image source
            alt="Hero"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      
    <About />
    <Skills />
    <Projects />
    <Contact/>
    </>
  );
};
export default HeroSection;