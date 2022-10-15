import React from "react";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192f] text-gray-300">
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
      <div className="hidden">
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
