import { motion } from "framer-motion";
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
        setShow(false);
      } else {
        setShow(true);
      }
      setScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [scroll]);

  const menuAni = {
    hidden: { y: 100, opacity: 0, when: "afterChildren" },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
    hover: { scale: 1.1, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className={
        show
          ? "fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#e4efec] text-[#344b43] duration-1000"
          : "fixed z-50 w-full h-[80px] flex justify-between items-center px-4  bg-[#e4efec] text-[#344b43] -translate-y-96 duration-1000 delay-1000"
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
      <motion.div
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="md:hidden z-10"
      >
        {!Nav ? <FaBars /> : <FaTimes />}
      </motion.div>

      {/* mobile menu */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#344b43] text-[#e4efec] flex flex-col justify-center items-center"
        }
      >
        <motion.li
          variants={menuAni}
          initial={"hidden"}
          whileInView={"show"}
          className="py-6 text-4xl"
        >
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={menuAni}
          initial={"hidden"}
          whileInView={"show"}
          className="py-6 text-4xl"
        >
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </motion.li>
        <motion.li
          variants={menuAni}
          initial={"hidden"}
          whileInView={"show"}
          className="py-6 text-4xl"
        >
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </motion.li>
        <motion.li
          variants={menuAni}
          initial={"hidden"}
          whileInView={"show"}
          className="py-6 text-4xl"
        >
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </motion.li>
        <motion.li
          variants={menuAni}
          initial={"hidden"}
          whileInView={"show"}
          className="py-6 text-4xl"
        >
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
