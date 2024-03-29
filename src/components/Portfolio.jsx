import React from "react";
// import RGBTech from "../assets/RGBTech.png";
// import pifoods from "../assets/newFoods.png";
// import BsaleShop from "../assets/Bsale.png"
import ArboladoApp from "../assets/ArboladoApp.png"
import SabumFit from "../assets/SabumFit.png"
import Greydive from "../assets/Greydive.png"
import ReclamosApp from "../assets/ReclamosApp.png"


const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   src: RGBTech,
    //   href: "https://rgbtech.vercel.app/",
    //   gitHub: "https://github.com/RGBTech-PF/rgbtech",
    //   name: "RGBTech E-commerce tecnológico"   
    // },
    // {
    //   id: 2,
    //   src: pifoods,
    //   href: "https://pi-food-two.vercel.app/",
    //   gitHub: "https://github.com/lvlaciel/Pi-Food",
    //   name: "Proyecto individual foods-app" 
    // },
    // {
    //   id: 4,
    //   src: BsaleShop,
    //   href: "https://challenge-bsale-frontend.vercel.app/",
    //   gitHub: "https://github.com/lvlaciel/challengeBsale-frontend",
    //   name: "BsaleShop tienda online" 
    // },
    {
      id: 5,
      src: SabumFit,
      href: "https://gym-sabum-fit.vercel.app/",
      gitHub: "https://github.com/lvlaciel/gym_sabumFit",
      name: "SabumFit Gym" 
    },
    {
      id: 6,
      src: Greydive,
      href: "https://challenge-greydive-alpha.vercel.app/",
      gitHub: "https://github.com/lvlaciel/challenge-Greydive",
      name: "Greydive Form" 
    },
    {
      id: 7,
      src: ReclamosApp,
      href: "https://develop--municipalidad-corrientes.netlify.app/",
      gitHub: "https://gitlab.com/juanmazalazar/municipalidad-corrientes-app",
      name: "Reclamos App Corrientes" 
    },
    {
      id: 8,
      src: ArboladoApp,
      href: "https://arboladodesarrollo.ciudaddecorrientes.gov.ar/login",
      gitHub: "https://gitlab.com/juanmazalazar/arbolado",
      name: "Arbolado App Corrientes" 
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-t from-gray-400 to-[#5DADE2] w-full h-full text-gray-700 md:h-screen dark:bg-gradient-to-t dark:from-gray-400 dark:to-gray-800"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-700 font-bold inline border-b-4 border-white dark:text-cyan-300 dark:border-white">
            Portfolio
          </p>
          <p className="py-10 font-bold text-xl text-white dark:text-white">Mis trabajos</p>
        </div>

        <div className="grid sm:grid-cols-1 mr-2 md:grid-cols-3 gap-8 px-2 pb-5 sm:px-0">
          {portfolios.map(({ id, src, href, gitHub, name }) => (
            <div key={id} className="shadow-lg shadow-gray-600 rounded-lg dark:text-white text-center">
              <h2 className="font-bold mb-1">{name}</h2>
              <img
                src={src}
                alt="Not found"
                className="rounded-md duration-200 hover:scale-105 hover:opacity-80"
              />
              <div className="flex items-center justify-center">
                <a href={href}
                   target="_blank"
                >
                <button className="w-1/2 px-6 py-2 m-4 mr-1 duration-150 hover:scale-105 font-semibold hover:text-white dark:hover:text-cyan-300"
                >
                Deploy
                </button>
                </a>
                <a href={gitHub}
                   target="_blank" 
                >
                <button className="w-1/2 px-6 py-2 m-4 duration-150 hover:scale-105 font-semibold hover:text-white dark:hover:text-cyan-300">
                  Repositorio
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;