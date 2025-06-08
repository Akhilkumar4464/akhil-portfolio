 import React from 'react'
import ProjectCard from '../components/ProjectCard'
 
 function Projects() {
   return (
     <div className="md:h-screen w-full h-full md:w-screen bg-gradient-to-br  from-gray-900  via-gray-800  to-gray-700">
       <div className="flex flex-col items-center justify-center  mb-6 ">
           <h1  className=' text-2xl mt-3'>Hii, these are my projects that i develop</h1>
           <h3 className=' text-2xl'>
               and they help me to improve my skills in web development
                
           </h3>

            <h4 className=' text-2xl'>
               I am a web developer and i am working on many projects

            </h4>
             


       </div>
       <ProjectCard/>
     </div>
   )
 }
 
 export default Projects
 