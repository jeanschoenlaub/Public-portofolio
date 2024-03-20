import Link from "next/link";
import { DrawingsWindTurbines } from "../../components/drawings/wind-turbines";
import ProjectList from "../../components/projects/project-list/project-list";
import Navigation from "~/components/NavBar";
import { useState } from "react";


export default function Home() {

  const [theme, setTheme] = useState('light'); // Default theme or fetch from localStorage

  // This function is passed to Navigation and updates the parent's state
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <main className=" bg-custom-beige dark:bg-black p-4">
        <div className="container px-2 lg:px-8 w-full lg:w-1/2 mx-auto">
        
        <Navigation activeSection='home' onThemeChange={handleThemeChange} />

            <div id="projects" className={` p-2 mt-12 min-w-[600px]  `}>
                <ProjectList></ProjectList>
            </div>

            <div id="link-to-gh-repo" className="mt-4 text-gray-500 text-sm"> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>


            <div className="hidden lg:block">
                <DrawingsWindTurbines animationDuration={5}></DrawingsWindTurbines>
            </div>
    </div>
      </main>
    </>
  );
}
