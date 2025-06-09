import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div  className="md:h-screen w-full h-full  bg-gradient-to-br  from-gray-900  via-gray-800  to-gray-700">
      <div className="flex flex-col text-center items-center justify-center  mb-6 p-5 ">
        <h1 className="  mt-3 text-4xl font-bold text-gray-950">
          {" "}
          I am a web developer and i am working on many projects
        </h1>
        <h3 className=" text-2xl text-gray-700">
          Hii, these are my projects that i develop
        </h3>

        <h4 className=" text-2xl text-gray-700">
          and they help me to improve my skills in web development
        </h4>
      </div>
      <ProjectCard />
    </div>
  );
}

export default Projects;
