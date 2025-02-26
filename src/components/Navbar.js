import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[2rem] py-[1rem] bg-slate-900  text-white shadow-sm sticky top-0 z-50">
      <Link to="/" className="flex gap-2 items-center">
        <div className="logo">SP</div>
        <span className="font-bold text-xl">Stock Photos
  </span>
      </Link>
      <a href="https://github.com/aarjitpaudel">
        <FaGithub className="text-3xl" />
      </a>
    </nav>
  );
};

export default Navbar;
