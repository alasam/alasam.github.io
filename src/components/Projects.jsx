import React from "react";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen bg-black text-gray-300">
      {/* container */}
      <div>
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-4">Check out a few of my past works.</p>
        </div>

        <div>
          <div>
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
