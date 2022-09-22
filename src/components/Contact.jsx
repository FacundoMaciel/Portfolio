import React from "react";
import linkedin from "../assets/linkedin.png";

const Contact = () => {

    const links = [
        {
          id: 1,
          src:linkedin,
          href: "https://www.linkedin.com/in/facundo-maciel-8843a7241/",
        },
        {
          id: 2,
          href: "https://github.com/lvlaciel",
        },
        {
          id: 3,
          src: linkedin,
          href: "mailto:facundomaciel12@hotmail.com",
        },
        {
          id: 4,
          href: "/CVfcm.pdf",
          style: "rounded-br-md",
          download: true,
        },
      ];

  return (
    <div
      name="contacto"
      className="bg-white w-full h-screen mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-700 font-bold border-b-4 border-cyan-300 p-2 inline">
            Contactos
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {links.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:opacity-90 hover:bg-black hover:text-xl hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
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

export default Contact;