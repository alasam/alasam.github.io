import React, { useState } from "react";
import { BsFillPersonLin } from "react-icons/bs";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
      {/* logo/name */}
      <div>Anthony Lasam</div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* menu icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li>
            <a href="/">
              <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
