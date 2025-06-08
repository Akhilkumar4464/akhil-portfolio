import React from 'react'
 
 function Footer() {
 
return (
  <footer className= "bg-gray-900 text-gray-200  w-full py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl font-bold">Akhil Portfolio</h2>
        <p className="text-sm mt-1">© {new Date().getFullYear()} Akhil. All rights reserved.</p>
      </div>
      <div className="flex space-x-6">
        <a
          href="https://github.com/akhilkumar4464"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/akhilkumar4464"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z"/>
          </svg>
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition-colors duration-200"
          aria-label="Twitter"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48c-4.09-.2-7.72-2.17-10.15-5.15a4.93 4.93 0 0 0-.67 2.48c0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.85.17-1.3.17-.32 0-.62-.03-.92-.09.62 1.94 2.42 3.36 4.55 3.4a9.87 9.87 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.94 13.94 0 0 0 7.56 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.1 10.1 0 0 0 24 4.56z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
)
 }
 
export default Footer
 