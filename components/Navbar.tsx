import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl">RV</button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-2">
          <Link
           href={"https://github.com/MODSetter"}
           className="btn btn-error"
           rel="noopener noreferrer" 
           target="_blank"
           >
            <FaGithubSquare size={30}/> GitHub
           </Link>
          </li>
          <li className="mx-2">
          <Link
           href={"https://www.linkedin.com/in/rohan-verma-sde/"}
           className="btn btn-error"
           rel="noopener noreferrer" 
           target="_blank"
           >
            <FaLinkedin size={30}/> LinkedIn
           </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
