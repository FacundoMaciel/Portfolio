import React from "react";

const Contact = () => {

  const handleSubmit = () => {
    e.target.reset()
  }

  return (
    <div
      name="contacto"
      className="w-full h-full bg-gradient-to-b from-[#90EE90] to-white dark:dark:bg-gradient-to-t dark:from-gray-800 dark:to-transparent text-gray-800 dark:text-cyan-300 dark:border-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white ">
           Contactame
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/80593fd7-ee8f-4deb-8279-4bcbaee8fde3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Ingresa tu nombre"
              className="p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Ingresa tu email"
              className="my-4 p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Escribime un mensaje"
              rows="10"
              className="p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            ></textarea>

            <button className="text-gray-800 font-bold hover:animate-pulse bg-gradient-to-t from-gray-400 to-[#90EE90] dark:bg-gradient-to-b dark:from-cyan-300 dark:to-gray-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            onSubmit={handleSubmit}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;