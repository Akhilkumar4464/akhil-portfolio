 import React from 'react'
 
 function ProjectCard() {
   return ( 
     <div >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {/* Currency Converter */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
        <span className="text-4xl text-blue-500 mb-4">
          <i className="ri-exchange-dollar-line"></i>
        </span>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <span className="mr-2">
            <svg className="inline-block w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4"></path></svg>
          </span>
          Currency Converter
        </h3>
        <p className="text-gray-600 mb-4 text-center">A simple app to convert currencies in real-time using latest exchange rates.</p>
        <a href="https://github.com/Akhilkumar4464/currency-converter" className="text-blue-600 hover:underline font-medium">View Project</a>
      </div>
      {/* Spotify Clone */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
        <span className="text-4xl text-green-500 mb-4">
          <i className="ri-spotify-line"></i>
        </span>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <span className="mr-2">
            <svg className="inline-block w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 15s1.5-2 4-2 4 2 4 2"></path></svg>
          </span>
          Spotify Clone
        </h3>
        <p className="text-gray-600 mb-4 text-center">A music streaming web app inspired by Spotify with playlists and player UI.</p>
        <a href="https://github.com/Akhilkumar4464/spotify-clone" className="text-green-600 hover:underline font-medium">View Project</a>
      </div>
      {/* To-Do App */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
        <span className="text-4xl text-yellow-500 mb-4">
          <i className="ri-checkbox-circle-line"></i>
        </span>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <span className="mr-2">
            <svg className="inline-block w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 12l2 2l4-4"></path></svg>
          </span>
          To-Do App
        </h3>
        <p className="text-gray-600 mb-4 text-center">Organize your tasks efficiently with this minimal and intuitive to-do app.</p>
        <a href="https://github.com/Akhilkumar4464/TO-Doapp" className="text-yellow-600 hover:underline font-medium">View Project</a>
      </div>
      {/* User Dashboard */}
      <div className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
        <span className="text-4xl text-purple-500 mb-4">
          <i className="ri-dashboard-line"></i>
        </span>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <span className="mr-2">
            <svg className="inline-block w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 9h6v6H9z"></path></svg>
          </span>
          User Dashboard
        </h3>
        <p className="text-gray-600 mb-4 text-center">A responsive dashboard for users to manage their profile and settings.</p>
        <a href="#" className="text-purple-600 hover:underline font-medium">View Project</a>
      </div>
    </div>
     </div>
   )
 }
 
 export default ProjectCard
 