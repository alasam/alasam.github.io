import React from "react";
import Avatar from "../assets/avatar.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300 py-6">
      <div className="flex flex-col justify-center items-center w-full h-full animate__animated animate__heartBeat">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold py-2 text-gray-500">
              Hello! Thanks for dropping by. My name is Anthony Lasam
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
          <div>
            <img src={Avatar} className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
