import { default as React } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Socials = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {/* Linkedin */}
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-blue-600">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.linkedin.com/in/anthony-lasam-795111124/"
          >
            Linkedin
            <FaLinkedin size={30} />
          </a>
          {/* Github */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-gray-700">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://github.com/alasam"
          >
            Github
            <FaGithub size={30} />
          </a>
          {/* Email */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-indigo-500">
          <a
            className="flex justify-between items-center w-full text-white"
            to="contact"
            smooth={true}
            duration={500}
          >
            <Link to="contact" smooth={true} duration={500}>
              Email
            </Link>
            <HiOutlineMail size={30} />
          </a>
          {/* Resume */}
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-green-600">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://resume.creddle.io/resume/1js6x1tlebi"
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
