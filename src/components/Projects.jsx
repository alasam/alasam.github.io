import React from "react";

import { BsGithub } from "react-icons/bs";
import jungle from "../assets/projects/jungle.PNG";
import matchmaker from "../assets/projects/matchmaker.png";
import scheduler from "../assets/projects/scheduler.png";
import tweeter from "../assets/projects/tweeter.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen bg-black text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-4">Check out a few of my past works.</p>
        </div>

        {/* card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card */}

          {/* jungle */}
          <div
            style={{ backgroundImage: `url(${jungle})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider inline border-b-2">
                Jungle Rails
              </span>
              <br></br>
              <span className="text-lg font-bold text-gray-300 tracking-wider px-3">
                Mini e-commerce app built with Rails 6.1
              </span>
              <br></br>
              <div className="pt-8 text-center inline-block align-middle">
                <a href="/">
                  <button className="text-center text-blue-400 font-bold  flex items-center text-lg rounded-lg px-4 py-3 m-2 bg-white">
                    <BsGithub size={30} /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* scheduler */}
          <div
            style={{ backgroundImage: `url(${scheduler})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider inline border-b-2">
                Interview Scheduler
              </span>
              <br></br>
              <span className="text-lg font-bold tracking-wider px-3 text-gray-300">
                Interview Scheduling app focused on React
              </span>
              <br></br>
              <div className="pt-8 text-center inline-block align-middle">
                <a href="/">
                  <button className="text-center text-blue-400 font-bold  flex items-center text-lg rounded-lg px-4 py-3 m-2 bg-white">
                    <BsGithub size={30} /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* tweeter */}
          <div
            style={{ backgroundImage: `url(${tweeter})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider inline border-b-2">
                Tweeter
              </span>
              <br></br>
              <span className="text-lg font-bold tracking-wider px-3 text-gray-300">
                Twitter clone built with HTML, CSS, JS, jQuery and AJAX
              </span>
              <br></br>
              <div className="pt-8 text-center inline-block align-middle">
                <a href="/">
                  <button className="text-center text-blue-400 font-bold  flex items-center text-lg rounded-lg px-4 py-3 m-2 bg-white">
                    <BsGithub size={30} /> GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* mathcmaker */}
          <div
            style={{ backgroundImage: `url(${matchmaker})` }}
            className="shadow-lg shadow-slate-800 group container rounded-md text-center flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider inline border-b-2">
                Matchmaker
              </span>
              <br></br>
              <span className="text-lg font-bold tracking-wider px-3 text-gray-300">
                Tournament Organizer app build with Rails 7.0.1
              </span>
              <br></br>
              <div className="pt-8 text-center inline-block align-middle">
                <a href="/">
                  <button className="text-center text-blue-400 font-bold  flex items-center text-lg rounded-lg px-4 py-3 m-2 bg-white">
                    <BsGithub size={30} /> GitHub
                  </button>
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
