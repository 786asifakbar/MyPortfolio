import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Html as HtmlIcon,
  Css as CssIcon,
  Javascript as JavascriptIcon,
  React as ReactIcon,
  Node as NodeIcon,
  Storage as MongoDBIcon,
  Code as ExpressIcon,
  Tailwind as TailwindIcon
} from "@mui/icons-material";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML", icon: <HtmlIcon style={{ color: "#E44D26" }} /> },
    { name: "CSS", icon: <CssIcon style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <JavascriptIcon style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <ReactIcon style={{ color: "#61DAFB" }} /> },
    { name: "Node.js", icon: <NodeIcon style={{ color: "#339933" }} /> },
    { name: "Express", icon: <ExpressIcon style={{ color: "#333333" }} /> },
    { name: "MongoDB", icon: <MongoDBIcon style={{ color: "#47A248" }} /> },
    { name: "Tailwind CSS", icon: <TailwindIcon style={{ color: "#38B2AC" }} /> },
  ];

  return (
    <>
      <section id="skills" className="py-10 bg-gradient-to-l from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-10">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-blue-600 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                data-aos="fade-up"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills;