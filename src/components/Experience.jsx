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
      style: "shadow-blue-600 bg-gray-800 text-cyan-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 bg-gray-800 text-blue-300",
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
      style: "shadow-gray-600 bg-gray-800 text-white",
    },
  ];

  return (
    <div
      name="lenguajes"
      className="bg-white w-full h-screen mt-20 dark:bg-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full text-white dark:text-white dark:bg-gray-800">
        <div>
          <p className="text-4xl text-gray-700 font-bold border-b-4 border-cyan-300 dark:text-cyan-300 dark:border-white p-2 inline">
            Lenguajes
          </p>
          <p className="py-6">Tecnologias aprendidas</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-2 px-12 sm:px-0 dark:bg-gray-800">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:opacity-90 hover:bg-black hover:text-xl hover:scale-95 duration-500 py-2 rounded-lg ${style}`}
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
