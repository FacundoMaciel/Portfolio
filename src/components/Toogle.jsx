import React from 'react';
import { ThemeContext } from "./ThemeProvider";
import { TiWeatherSunny } from 'react-icons/ti';
import { TbMoonStars } from 'react-icons/tb';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
         <TbMoonStars size={24}/>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
         <TiWeatherSunny size={24}/>
        </button>
      )}
    </div>
  );
};

export default Toggle;