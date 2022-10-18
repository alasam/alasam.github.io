import React from "react";

import jungle from "../assets/projects/jungle.PNG";
import scheduler from "../assets/projects/scheduler.png";
import tweeter from "../assets/projects/tweeter.png";

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

        {/* cards */}
        <div
          style={{ backgroundImage: `url(${jungle})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
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
