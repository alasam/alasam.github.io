import { motion, useAnimation, useInView, whileInView } from "framer-motion";
import React, { useRef } from "react";
import Avatar from "../assets/avatar.jpeg";

const About = () => {
  // useInView Reference
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView({ root: container });

  return (
    <div
      ref={container}
      name="about"
      className="w-full h-auto bg-[#344b43] text-gray-300 py-6 sm:h-screen"
    >
      {/* Container */}
      <motion.div
        ref={ref}
        initial={{ x: "-30vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
        viewport={{ margin: "-250px" }}
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full gap-8">
          <div className="text-center sm:pb-8 pl-4 pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E3C1D3]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="text-center sm:text-right text-4xl font-bold py-2 text-gray-500">
              Hello! Thanks for dropping by. <br></br>I'm Anthony Lasam
            </p>
            <p className="sm:text-right py-2">
              I am a System Analyst with 8+ years of experience managing system
              and environments, as well as 1+ year as a Deployment Specialist
              reviewing and testing code in lower environments before deploying
              updates and patches to Production. With many years working in the
              Tech industry I have gained many skills, such as communication and
              customer service, problem solving, hardware and software
              familiarity, and recently gained coding knowledge, I believe my
              passion for coding and learning will be a great fit with any
              company that I have the privilage to work with.
            </p>
          </div>
          <div className="object-center md:shrink-0">
            <img
              src={Avatar}
              className=" rounded-full 
              "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
