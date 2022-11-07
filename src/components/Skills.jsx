import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
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
  // useInView ref
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView({ root: container });

  // Skills pop-up animation
  const popIn = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.3,
      },
    },
    hover: { scale: 1.1, transition: { duration: 0.7 } },
  };

  return (
    <div
      ref={container}
      name="skills"
      className="w-full md:h-screen bg-[#e4efec] text-[#344b43]"
    >
      {/* Container */}

      <motion.div
        ref={ref}
        initial={{ x: "30vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full"
      >
        <div className="flex items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-[#E3C1D3]">
            Skills
          </p>
          <p className="py-4">These are the technologies I work with</p>
        </div>

        {/* icon container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700 pt-5"
          >
            <img src={HTML} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">HTML</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={CSS} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">CSS</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={GitHub} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">Git/GitHub</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={JavaScript} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">JavaScript</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={Node} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">Node JS</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={ReactLogo} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">React</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={Tailwind} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">Tailwind CSS</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={Postgresql} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">PostgreSQL</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={Ruby} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">Ruby</p>
          </motion.div>
          <motion.div
            variants={popIn}
            initial="hidden"
            whileInView="show"
            whileHover={"hover"}
            className="shadow-md shadow-gray-700  pt-5"
          >
            <img src={Rails} alt="HTML logo" className="w-20 mx-auto" />
            <p className="py-4">Ruby on Rails</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    // </div>
  );
};

export default Skills;
