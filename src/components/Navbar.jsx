import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e4efec] text-[#344b43] shadow-sm">
      {/* logo/name */}
      <div>
        <h1 className="text-4xl font-bold tracking-widest text-[#94849B]">
          <span>A</span>
          <span>L</span>
          <span>.</span>
        </h1>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </li>
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
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
