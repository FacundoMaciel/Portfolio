import React from "react";
import MyPicture from "../assets/Facundo-1.png";

const About = () => {
  return (
    <div name="sobre mi" className="w-full h-screen bg-gradient-to-b from-white to-[#90EE90] text-gray-700 dark:dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800">
      <div className="max-w-screen-lg p-4 mt-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#90EE90] dark:text-cyan-300 dark:border-white">
            Sobre mi
          </p>
        </div>
          
        <p className="text-sm md:text-2xl mt-5 font-semibold text-gray-700 dark:text-white">
          Me fascina la programación, poder crear, innovar, solucionar, seguir
          creciendo en conocimiento, experiencia, lenguajes, herramientas, todo
          para ser un mejor profesional, aportar lo que se pueda al equipo de
          trabajo y cumplir las metas de la empresa, cliente y superar las
          propias!
          <br />
          Tuve varias experiencias loborales donde aprendí mucho,
          sentía igualmente que no era lo mío, lo que me hace feliz. Empecé la
          busqueda de un trabajo remoto y doy gracias por eso que fue donde
          descubrí el bootcamp de Henry, para así comenzar un intenso y dificil
          camino aprendiendo de programación web y encontrando eso que si me
          hace feliz, también un grupo de gente excelente, talentosa y en la
          busqueda de los mismos objetivos. Hoy estoy agradecido de haberme
          graduado de full stack web developer, en la busqueda de experiencias
          laborales, adquirir mayor conocimiento sobre lenguajes, herramientas y
          todo sobre el mundo de la tecnología
        </p>
      </div>
    </div>
  );
};

export default About;
