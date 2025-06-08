 import React from 'react'
 
 function ContactForm() {
   return (
     <div className='md:h-screen w-full h-full ' >
     <div id="contact" className="py-12 bg-gray-500 min-h-screen flex flex-col items-center  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center animate-fadeInDown">Contact Me</h2>
      <form
        className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 animate-fadeInUp"
        onSubmit={e => {
          e.preventDefault();
          alert('Thank you for reaching out!');
        }}
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            onFocus={e => e.target.classList.add('bg-blue-50')}
            onBlur={e => e.target.classList.remove('bg-blue-50')}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            onFocus={e => e.target.classList.add('bg-blue-50')}
            onBlur={e => e.target.classList.remove('bg-blue-50')}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            onFocus={e => e.target.classList.add('bg-blue-50')}
            onBlur={e => e.target.classList.remove('bg-blue-50')}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold transition-transform duration-150 hover:bg-blue-700 active:scale-95"
        >
          Send
        </button>
      </form>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s;
        }
      `}</style>
    </div>
     </div>
   )
 }
 
 export default ContactForm
 
 
 