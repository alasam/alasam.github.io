import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <div name="home" className="bg-[#e4efec] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-800">Hello! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#344b43]">
          Anthony Lasam
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-500">
          I am a{" "}
          {/* <a className="underline decoration-[#E3C1D3]">System Analyst</a> and a */}
          <a className="underline decoration-[#E3C1D3]">
            {" "}
            Full Stack Developer
          </a>
          .
        </h2>
        <p className="text-[#344b43] py-4 max-w-[700px]">
          I am based out of Toronto with a fresh passion for coding. Focused on
          building new and modern digital design and working to build web
          applications with improved customer experiences.
        </p>
        <div>
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            <button className="text-[#344b43] hover:text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#344b43] hover:border-[#344b43] shadow-sm shadow-black">
              My Projects{" "}
              <span className="group-hover:rotate-90 group-hover:-translate-y-[0.3rem] duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
