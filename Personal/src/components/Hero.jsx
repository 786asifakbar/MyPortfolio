// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-500 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm a Web Developer</h1>
        <p className="text-2xl mb-6">I create amazing web experiences</p>
        <a href="#projects" className="bg-white text-blue-500 py-2 px-4 rounded-full">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
