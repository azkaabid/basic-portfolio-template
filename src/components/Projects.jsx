
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center bg-gray-800 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-indigo-900">
          <h3 className="text-xl font-semibold mb-4">Project 1</h3>
          <p className="mb-4">A brief description of the project.</p>
          <a href="https://github.com/azkaabid" className="text-indigo-300 hover:text-black">View Project</a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-indigo-900">
          <h3 className="text-xl font-semibold mb-4">Project 2</h3>
          <p className="mb-4">A brief description of the project.</p>
          <a href="https://github.com/azkaabid" className="text-indigo-300 hover:text-indigo-500">View Project</a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-indigo-900">
          <h3 className="text-xl font-semibold mb-4">Project 3</h3>
          <p className="mb-4">A brief description of the project.</p>
          <a href="https://github.com/azkaabid" className="text-indigo-300 hover:text-indigo-500">View Project</a>
        </div>
      </div>
    </section>
  );
}
