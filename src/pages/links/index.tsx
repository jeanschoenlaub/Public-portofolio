import Link from "next/link";
import { linksData,lastlinksDataUpdateString } from "../../data/links";
import Navigation from "~/components/NavBar";
import { useState } from "react";
import { DrawingsWindTurbines } from "~/components/drawings/wind-turbines";

export default function LinksPage () {

  const [theme, setTheme] = useState('light'); // Default theme or fetch from localStorage

  // This function is passed to Navigation and updates the parent's state
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <main className={`min-h-screen ${theme === 'dark' ? ' bg-gray-900' : 'bg-custom-beige'} p-4`}>
        <div className="container px-4 sm:px-8 w-full lg:w-1/2 mx-auto">
        
        {/* <Navigation activeSection='links' onThemeChange={handleThemeChange} /> */}

        <div className={`mt-8 mb-4 text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200': 'text-gray-800'}`}>
           Links
        </div>
        <div className={`mb-4 ${theme === 'dark' ? 'text-gray-200': 'text-gray-800'}`}>
            Here is a list of links I am currently working on: 
        </div>

        {linksData.map((link, index) => (
            <div key={index} className="mb-2 flex">
   
                        <Link href={link.link} target="_blank" className={` ml-1 flex font-semibold justify-center items-center
                            ${theme === 'dark' ? 'text-gray-200 underline-teal-500': 'text-gray-800 underline-custom-mint-green '}
                            `}>         
                            {link.title}
                        </Link>
            </div>

        ))}

        <div className={`mt-4 ${theme === 'dark' ? 'text-gray-200': 'text-gray-800'}`}>
          Last updated: {lastlinksDataUpdateString}
        </div>

            <div className="hidden lg:block">
              <DrawingsWindTurbines animationDuration={5}></DrawingsWindTurbines>
            </div>
          </div>
      </main>
    </>
  );
}


