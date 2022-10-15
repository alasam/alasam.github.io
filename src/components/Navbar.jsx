import React, { useState } from "react";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
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
      <div onClick={handleClick} className="md:hidden z-10">
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className="hidden absolute top-0 left-0 w-full h-screen bg-[#0A192f] flex flex-col justify-center items-center">
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
