// src/components/Skills.jsx


const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS"];
  return (
   <> 
   <section id="skills" className="py-10 bg-gradient-to-l from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-blue-600 p-4 rounded-lg shadow-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
