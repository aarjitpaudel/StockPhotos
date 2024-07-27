import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid place-items-center gap-[.5rem] bg-slate-900 py-[2rem]">
      <div>
        <a
          href="https://github.com/aarjitpaudel"
          className="inline-block mr-[1rem]"
        >
          <FaGithub className="text-3xl text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/aarjit-paudel-795820216"
          className="inline-block"
        >
          <FaLinkedin className="text-3xl text-white" />
        </a>
      </div>
      <h1 className="font-semibold text-center text-lg text-gray-100">
        Made with ❤ by Aarjit Paudel
      </h1>
    </footer>
  );
};

export default Footer;
