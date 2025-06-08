import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const SkillsGrid = () => (
    <div className="py-10 px-4 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

        <article className=" mb-6 mt-3 text-2xl font-semibold ">
            <p className="text-gray-600 text-center justify-center items-center">
                I have a solid foundation in the following technologies and frameworks. I'm always looking to expand my
                skillset and learn new things.
            </p>
        </article>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl group"
                >
                    <div className="text-5xl mb-3 transition-transform duration-300 group-hover:rotate-12">
                        {skill.icon}
                    </div>
                    <span className="text-lg font-semibold">{skill.name}</span>
                </div>
            ))}
        </div>
        {/* Tailwind CSS attribution */}
        <div className="mt-8 flex justify-center">
            <span className="flex items-center gap-2 text-sm text-gray-500">
                Built with
                <SiTailwindcss className="text-cyan-400 text-xl" />
                Tailwind CSS
            </span>
        </div>
       
    </div>
);

export default SkillsGrid;