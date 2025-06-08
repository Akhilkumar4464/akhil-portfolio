 import React from 'react'
 import akhilAvtar from '../assets/akhilAvatar.jpg'
 function Hero() {
return (
    <section
        className="md:h-screen w-full h-full md:w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
        <div className="flex flex-col justify-center items-center h-full">
            <div className="relative group mb-6">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-lg group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 animate-spin-slow"></div>
                <img
                    className="h-60 w-60 rounded-full border-4 border-white shadow-xl object-cover z-10 relative transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3"
                    src={akhilAvtar}
                    alt="Akhil Avatar"
                />
            </div>

            <h1 className="text-4xl font-bold text-white">
                Welcome to my Portfolio
            </h1>
            <p className="text-lg text-white">
                This is a portfolio website showcasing my skills and projects.
            </p>
            <p className="text-lg text-white">
                You can find more information about me and my projects by clicking on the links below.
            </p> 
            
            <button className="group mt-4 relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-700 transition">
                <span> Knew More</span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 transition-[width] group-hover:w-full"></div>
            </button>
            <style>
                {`
                    @keyframes spin-slow {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                    }
                    .animate-spin-slow {
                        animation: spin-slow 8s linear infinite;
                    }
                `}
            </style>
        </div>
    </section>
)
 }
 
 export default Hero
 