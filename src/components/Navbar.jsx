import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);

  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > scroll) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [scroll]);

  return (
    <div
      className={
        show
          ? "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e4efec] text-[#344b43] duration-1000"
          : "fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#e4efec] text-[#344b43] -translate-y-96 duration-1000 delay-1000"
      }
    >
      {/* logo/name */}
      <div>
        <h1 className="text-4xl font-bold tracking-widest">
          <span className="animate-pulse animation-delay-50">A</span>
          <span className="animate-pulse animation-delay-100">L</span>
          <span className="animate-pulse animation-delay-150">.</span>
        </h1>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <p className="hover:opacity-50 transition-all duration-500">Home</p>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <p className="hover:opacity-50 transition-all duration-500">
              About
            </p>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <p className="hover:opacity-50 transition-all duration-500">
              Skills
            </p>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            <p className="hover:opacity-50 transition-all duration-500">
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline border-b-4 border-[#E3C1D3] animate-pulse hover:opacity-50 transition-all duration-500"
          >
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
            : "absolute top-0 left-0 w-full h-screen bg-[#344b43] text-[#e4efec] flex flex-col justify-center items-center"
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
