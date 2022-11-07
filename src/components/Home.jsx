import { motion, useAnimation, whileInView } from "framer-motion";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <div name="home" className="bg-[#e4efec] w-full h-screen">
      {/* Container */}
      <motion.div
        initial={{ x: "53vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        viewport={{ margin: "-300px" }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-green-800"
        >
          Hello! My name is
        </motion.p>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl sm:text-7xl font-bold text-[#344b43] pb-1"
        >
          Anthony Lasam
        </motion.h1>
        <motion.h2
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-3xl sm:text-5xl font-bold text-gray-500"
        >
          I am a{" "}
          {/* <a className="underline decoration-[#E3C1D3]">System Analyst</a> and a */}
          <motion.a
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="underline decoration-[#E3C1D3]"
          >
            {" "}
            Full Stack Developer
          </motion.a>
          .
        </motion.h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-[#344b43] py-4 max-w-[700px]"
        >
          I am based out of Toronto with a fresh passion for coding. Focused on
          building new and modern digital design and working to build web
          applications with improved customer experiences.
        </motion.p>
        <div>
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            <motion.button
              // animate={{ opacity: 1 }}
              // initial={{ opacity: 0 }}
              // transition={{ delay: 3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
              className="text-[#344b43] hover:text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#344b43] hover:border-[#344b43] shadow-sm shadow-black"
            >
              My Projects{" "}
              <span className="group-hover:rotate-90 group-hover:-translate-y-[0.3rem] duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
