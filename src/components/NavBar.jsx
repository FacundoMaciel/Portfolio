import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/Maciel-Negro.png";
import Toogle from "./Toogle";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "sobre mi",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "lenguajes",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-gray-600 bg-white dark:bg-gray-800 fixed shadow-blue-700 z-50">
      <Link to="inicio" smooth duration={500}>
        <div className="w-20 ml-1 cursor-pointer dark:bg-gray-800">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      

      <ul className="hidden md:flex">
        
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold text-gray-500 dark:text-cyan-300 hover:scale-105 duration-200 hover:border-b-2 hover:border-cyan-300 hover:rotate-12"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* <li className="px-4 cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200 hover:border-b-2 hover:border-cyan-300 hover:rotate-12">
          <a href="mailto:facundomaciel12@hotmail.com">
            <button>Contacto</button>
          </a>
        </li> */}
        <li>
        <Toogle/>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden dark:text-cyan-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-gray-800 dark:bg-gray-800 dark:text-cyan-300 ">
          <Toogle/>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="mailto:facundomaciel12@hotmail.com">
              <button>Contacto</button>
            </a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="/CVfcm.pdf" download>
              <button>CV</button>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;