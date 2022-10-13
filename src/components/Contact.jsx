import React, { useState } from "react";

const Contact = () => {

 const [input, setInput] = useState({
    name: "",
    email: "",
    message:"",
 });

 const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({
      name: "",
      email: "",
      message: "",
    });
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
              title="Ingrese un nombre valido por favor"
              pattern="[A-Za-z ]{2,30}"
              minLength="2"
              onChange={onChange}
              placeholder="Ingresa un nombre valido de 2 a 30 carateres"
              className="p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              onChange={onChange}
              placeholder="Ingresa un email valido"
              className="my-4 p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              onChange={onChange}
              placeholder="Escribime un mensaje que tenga como mínimo 4 caracteres"
              required
              maxLength="300"
              minLength="4"
              rows="10"
              className="p-2 bg-transparent border-2 border-gray-900 rounded-md text-gray-800 dark:text-white focus:outline-none"
            ></textarea>

            <button type="submit" onSubmit={handleSubmit} className="text-gray-800 font-bold hover:animate-pulse bg-gradient-to-t from-gray-400 to-[#90EE90] dark:bg-gradient-to-b dark:from-cyan-300 dark:to-gray-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;