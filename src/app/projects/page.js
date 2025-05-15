export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-700 text-white py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white text-black rounded-xl shadow-md p-6 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Project One</h3>
            <p className="mb-2">A short description of what this project is about.</p>
            <a
              href="#"
              className="text-indigo-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
  
          <div className="bg-white text-black rounded-xl shadow-md p-6 hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
            <p className="mb-2">Another cool thing I built.</p>
            <a
              href="#"
              className="text-indigo-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
  
          {/* Add more project cards here as needed */}
        </div>
      </main>
    );
  }
  