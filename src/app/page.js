'use client';
import { useEffect } from "react";
import "animate.css";

import { redirect } from "next/navigation";

export default function MainRedirect() {
  redirect("/home");
}
// export default function Home() {
//   useEffect(() => {
//     // This is where you can add any additional JS animations if needed
//   }, []);

//   return (
//     <main className="bg-gradient-to-br from-indigo-900 to-grey-700 text-white min-h-screen flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <section className="text-center px-4 py-16 animate__animated animate__fadeIn animate__delay-1s">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Hi, I'm Azka Abid</h1>
//         <p className="text-lg sm:text-xl lg:text-2xl mb-6">Frontend Developer | React & Next.js Specialist</p>
//         <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
//           See My Work
//         </button>
//       </section>

//       {/* About Section */}
//       <section className="bg-gray-800 w-full py-16 animate__animated animate__fadeIn animate__delay-2s">
//         <div className="text-center px-6">
//           <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
//           <p className="text-lg text-gray-300 sm:text-xl lg:text-2xl">
//             I'm a passionate Frontend Developer with a focus on building modern, responsive web applications using React and Next.js. With over 4 years of experience, I love creating intuitive user experiences and solving challenging problems. I'm constantly learning new technologies to stay ahead in the fast-evolving world of frontend development.
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="w-full py-16 bg-gray-900 animate__animated animate__fadeIn animate__delay-3s">
//         <div className="text-center px-6">
//           <h2 className="text-3xl font-semibold text-white mb-8">My Projects</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Project 1 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-white mb-4">Project Title 1</h3>
//               <p className="text-lg text-gray-300 mb-4">Short description of your project. You can mention technologies used or the purpose of the project.</p>
//               <a href="#" className="text-indigo-400 hover:text-indigo-600">View Project</a>
//             </div>

//             {/* Project 2 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-white mb-4">Project Title 2</h3>
//               <p className="text-lg text-gray-300 mb-4">Short description of your project. You can mention technologies used or the purpose of the project.</p>
//               <a href="#" className="text-indigo-400 hover:text-indigo-600">View Project</a>
//             </div>

//             {/* Project 3 */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
//               <h3 className="text-2xl font-semibold text-white mb-4">Project Title 3</h3>
//               <p className="text-lg text-gray-300 mb-4">Short description of your project. You can mention technologies used or the purpose of the project.</p>
//               <a href="#" className="text-indigo-400 hover:text-indigo-600">View Project</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="w-full py-16 bg-gray-800 animate__animated animate__fadeIn animate__delay-4s">
//         <div className="text-center px-6">
//           <h2 className="text-3xl font-semibold text-white mb-8">Contact Me</h2>
//           <form className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-white text-lg mb-2">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-3 text-black rounded-md"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-white text-lg mb-2">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-3 text-black rounded-md"
//                 placeholder="Your Email"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-white text-lg mb-2">Your Message</label>
//               <textarea
//                 id="message"
//                 className="w-full p-3 text-black rounded-md"
//                 rows="4"
//                 placeholder="Your Message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 w-full py-6 animate__animated animate__fadeIn animate__delay-5s">
//         <div className="text-center text-white">
//           <p className="text-lg mb-4">&copy; 2025 Azka Abid. All rights reserved.</p>
//           <div className="flex justify-center gap-6">
//             <a href="https://www.linkedin.com" target="_blank" className="text-indigo-400 hover:text-indigo-600">
//               LinkedIn
//             </a>
//             <a href="https://github.com" target="_blank" className="text-indigo-400 hover:text-indigo-600">
//               GitHub
//             </a>
//             <a href="mailto:azka@example.com" className="text-indigo-400 hover:text-indigo-600">
//               Email
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
