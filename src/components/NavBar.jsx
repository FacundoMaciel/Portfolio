import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/LogoAnime.gif";
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
      link: "tecnologías",
    },
    {
      id: 5,
      link: "contacto",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-gray-600 bg-gradient-to-t from-transparent to-[#5DADE2] dark:bg-gradient-to-y dark:shadow-2xl dark:from-transparent dark:to-gray-700 fixed z-50">
      <Link to="inicio" smooth duration={500}>
        <div className="w-20 cursor-pointer dark:bg-gray-800">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      

      <ul className="hidden md:flex">
        
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer bg-transparent capitalize font-bold text-gray-600 dark:text-cyan-300 hover:scale-105 duration-100 hover:border-b-2 hover:border-white dark:hover:border-cyan-300"
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
        <li >
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
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-[#5DADE2] text-gray-800 dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800 dark:text-cyan-300 ">
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
            <a href="/CV.en-FacundoMacielDeveloper.pdf" download>
              <button>CV</button>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
