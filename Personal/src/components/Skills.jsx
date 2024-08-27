// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"];
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
