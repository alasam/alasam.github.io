import React from "react";

import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import Postgresql from "../assets/postgresql.png";
import Rails from "../assets/rails.png";
import ReactLogo from "../assets/react.png";
import Ruby from "../assets/ruby.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#e4efec] text-[#344b43]"
    >
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="bg-white rounded-3xl p-10">
          <div className="flex items-center flex-col">
            <p className="text-4xl font-bold inline border-b-4 border-[#E3C1D3]">
              Skills
            </p>
            <p className="py-4">These are the technologies I work with</p>
          </div>

          {/* icon container */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={HTML} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">HTML</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={CSS} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">CSS</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={GitHub} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">Git/GitHub</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={JavaScript} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={Node} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">Node JS</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={ReactLogo} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">React</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={Tailwind} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">Tailwind CSS</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={Postgresql} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">PostgreSQL</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={Ruby} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">Ruby</p>
            </div>
            <div className="shadow-md shadow-gray-700 hover:scale-110 duration-500">
              <img src={Rails} alt="HTML logo" className="w-20 mx-auto" />
              <p className="py-4">Ruby on Rails</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
