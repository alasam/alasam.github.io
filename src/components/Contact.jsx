import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      {/* form container */}
      <form
        method="POST"
        action="https://getform.io/f/69fcb290-3b61-483e-af1b-1d44ad8c19c4"
        className="flex flex-col max-w-[600px] w-full text-white"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Contact
          </p>
          <p className="py-4">These are the technologies I work with</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 bg-white text-black"
        />
        <input
          type="Email"
          placeholder="Email"
          name="email"
          className=" my-4 p-2 bg-white text-black"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="bg-white p-2 my-4 text-black"
        />
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-green-800 hover:border-green-800">
          Connect Now!
        </button>
      </form>
    </div>
  );
};

export default Contact;
