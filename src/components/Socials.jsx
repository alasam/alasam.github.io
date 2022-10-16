import React from "react";
import { BsFillPersonFill, BsFillPersonLin } from "react-icons/bs";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {/* Linkedin */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Linkedin
            <FaLinkedin size={30} />
          </a>
          {/* Github */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-700">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Github
            <FaGithub size={30} />
          </a>
          {/* Email */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-indigo-500">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Email
            <HiOutlineMail size={30} />
          </a>
          {/* Resume */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="/"
          >
            Resume
            <BsFillPersonFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
