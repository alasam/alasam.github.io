import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-black w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-800">Hello! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Anthony Lasam
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-gray-500">
          I am a{" "}
          <a className="underline decoration-pink-500/30">System Analyst</a> and
          a
          <a className="underline decoration-pink-500/30">
            {" "}
            Full Stack Developer
          </a>
          .
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          I am a former System Analyst who has taken a deeper step into the tech
          world and now is a fully fledge full-stack developer. Focusing on
          building new and modern digital design and working to build web
          applications with improved customer experiences.
        </p>
        <button>
          My Projects <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
