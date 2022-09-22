import React from "react";
import MiFoto from "../assets/Facundo-1.png";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="inicio" className="h-screen w-full bg-white dark:bg-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pt-10 sm:text-8xl font-bold text-gray-700 mt-14 dark:text-cyan-300">
            Facundo Maciel
          </h2>
          <p className="text-gray-500 py-4 max-w-md font-semibold dark:text-white">
            Hola! Cómo están? Aprendí en la academia Soy Henry, qué cosas? Que me encanta la programación y lenguajes como JavaScript, React, Redux, PostgreSQL, Express, HTML y CSS.
            
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-gray-700 font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-100 cursor-pointer"
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
            src={MiFoto}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full md:mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;