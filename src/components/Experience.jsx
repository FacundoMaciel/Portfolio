import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import redux from "../assets/redux.png";
import postgresql from "../assets/postgresql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 bg-gray-800 text-orange-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 bg-gray-800 text-cyan-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 bg-gray-800 text-yellow-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React.Js",
      style: "shadow-[#00CED1] bg-gray-800 text-[#00CED1]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-[#008B8B] bg-gray-800 text-[#008B8B]",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-pink-900 bg-gray-800 text-pink-700",
    },
   
    {
      id: 7,
      src: postgresql,
      title: "P.SQL",
      style: "shadow-blue-700 bg-gray-800 text-blue-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-600 bg-gray-800 text-white",
    },
    {
      id: 9,
      src: node,
      title: "Node.Js",
      style: "shadow-[#7FFF00] bg-gray-800 text-[#7FFF00]",
    },
  ];

  return (
    <div
      name="tecnologías"
      className="bg-gradient-to-b from-gray-400 to-[#5DADE2] w-full h-full mt-20 dark:dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full text-white dark:text-white dark:dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800">
        <div>
          <p className="text-4xl text-gray-800 font-bold border-b-4 border-white dark:text-cyan-300 dark:border-white inline">
            Tecnologías
          </p>
          <p className="py-10 font-bold text-xl text-white dark:text-white">Lenguajes y herramientas</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0 dark:bg-transparent">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:opacity-90 hover:bg-black hover:text-xl duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-12 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
