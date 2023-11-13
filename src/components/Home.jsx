import React from "react";
import Desarrollo from "../assets/DesarrolloSoftware.png";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="inicio" className="h-screen w-full bg-gradient-to-t from-gray-400 to-[#5DADE2] dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pt-10 sm:text-8xl font-bold text-gray-800 mt-14 dark:text-cyan-300">
            Facundo Maciel
          </h2>
          <p className="text-white py-4 max-w-md font-semibold dark:text-white">
          Soy un desarrollador web fullstack graduado del bootcamp Soy Henry, con experiencia en desarrolloweb Front End y Back End con tecnologías como <strong>JavaScript, React, HTML, CSS, NodeJS, NestJS </strong> entre otras. Conocimientos en metodología ágil <strong> SCRUM </strong>
            
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-gray-800 shadow-xl font-bold hover:animate-pulse w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#5DADE2] to-gray-500 cursor-pointer dark:bg-gradient-to-r dark:from-cyan-300 dark:to-gray-400"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightThick size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Desarrollo}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full md:mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;