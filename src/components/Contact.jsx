import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  const popIn = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.3,
      },
    },
    hover: { scale: 1.1, transition: { duration: 0.5 } },
  };

  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#e4efec] text-[#344b43] flex justify-center items-center px-7"
    >
      {/* form container */}
      <motion.form
        initial={{ x: "-50vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        ttransition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
        viewport={{ margin: "-250px" }}
        method="POST"
        action="https://getform.io/f/69fcb290-3b61-483e-af1b-1d44ad8c19c4"
        className="flex flex-col max-w-[600px] w-full text-[#344b43]"
      >
        <div className="pb-8 pt-8 flex items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 border-[#E3C1D3]">
            Contact
          </p>
          <p className="py-4">Reach out and lets start something new.</p>
        </div>
        <motion.input
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 bg-white text-black"
        />
        <motion.input
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
          type="Email"
          placeholder="Email"
          name="email"
          className=" my-4 p-2 bg-white text-black"
        />
        <motion.textarea
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
          }}
          name="message"
          rows="10"
          placeholder="Message"
          className="bg-white p-2 my-4 text-black"
        />
        <button className="text-[#344b43] hover:text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#344b43] hover:border-[#344b43] shadow-sm shadow-black">
          Connect Now!
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
