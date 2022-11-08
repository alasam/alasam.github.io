import { motion, useInView } from "framer-motion";
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
        initial={{ x: "-20vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] w-full gap-8">
          <div className="text-center sm:pb-8 pl-4 pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E3C1D3]">
              About Me
            </p>
          </div>
          <div />
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="text-center sm:text-right text-4xl font-bold py-2 text-gray-500">
              Hello! Thanks for dropping by. <br />
              I'm Anthony Lasam
            </p>
            <p className="sm:text-right py-2">
              I am former System Analyst looking to break and create things on
              the internet. My web development journey started at the end of
              2021 when I decided to take a shift from my IT home into
              Development. I took the leap with Lighthouse Lab's 12 week Web
              Development bootcamp and never turned back.
              <br />
              <br />
              Fast forward to present day, I am now a fully fledged Full Stack
              Developer focusing on Front End experience and customer
              interaction. Looking forward to my next steps in my career!
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
