import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import AboutMe from "../components/home/about-me";
import Timeline from "../components/home/timeline";
import Projects from "../components/home/projects";
import HomePageDrawings from "../components/drawings/home-drawings";

import Navigation from "~/components/NavBar";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface VisibilityState {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [key: string]: boolean;
}


export default function Home() {

  const [isElementVisible, setIsElementVisible] = useState<VisibilityState>({ timeline: false, aboutme: false });
  const [isAnyElementVisible, setIsAnyElementVisible]= useState(false)
  const [topOffsetPower, setTopOffsetPower] = useState(0);

  const handleTopOffsetPowerChange = (value:number) => {
      setTopOffsetPower(value);
  };

  useEffect(() => {
    // Scroll event handler
    const handleScroll = () => {
      const newVisibility: VisibilityState = {};

      // List of element selectors to check
      const elementsToCheck = ['timeline', 'aboutme','projects','hobbies', 'blog'];

      elementsToCheck.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisibility[id] = rect.top < topOffsetPower-20 && ( rect.bottom > (topOffsetPower-20));
        }
      });
      //show the solar panel connecting to the sections
      setIsElementVisible(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case elements are already in the desired position
    handleScroll();
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topOffsetPower]); //If window resized (wathced in children it resets here )


  useEffect(() => {
    // Update isAnyElementVisible based on the latest isElementVisible
    const isVisible = Object.values(isElementVisible).some(isVisible => isVisible);
    setIsAnyElementVisible(isVisible);
  
    //console.log(isVisible); // Will log the current state of visibility
  }, [isElementVisible]);

  const [theme, setTheme] = useState('light'); // Default theme or fetch from localStorage

  // This function is passed to Navigation and updates the parent's state
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <Head>
        <title> Jean Schoenlaub</title>
        <meta name="My Portofolio" content="A bit about me, what I've done and what I think" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`bg-custom-beige ${theme === 'dark' ? 'dark:bg-black' : ''} p-4`}>
        <div className="container px-2 lg:px-8 w-full lg:w-1/2 mx-0 lg:mx-auto">
        
          <Navigation activeSection='home' onThemeChange={handleThemeChange} />

          <div id="aboutme" className={`border-0 lg:border-l-4 min-w-[500px] relative z-50 p-2 mt-10 ${isElementVisible.aboutme ? ' border-yellow-400':'border-custom-beige'}`}>
                <AboutMe></AboutMe>
            </div> 

            <div id="projects" className={` p-2 border-0 min-w-[600px] relative z-50 lg:border-l-4 mt-10 ${isElementVisible.projects ? 'border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-3xl tracking-tight font-medium mt-2"> What I&apos;ve been up to </h2>
                <Projects></Projects>
            </div>

            <div id="timeline" className={` p-2 border-0 min-w-[500px] lg:border-l-4 mt-10 ${isElementVisible.timeline ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-3xl tracking-tight font-medium mt-2 mb-8"> It&apos;s about the journey </h2>
                <Timeline></Timeline>
            </div>

            <div id="link-to-gh-repo" className="mt-4 text-gray-500 text-sm"> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>

            {/* Conditional rendering of LeftDrawings for medium devices and up */}
            <div className="hidden lg:block -z-50">
              <HomePageDrawings isAnyElementVisible={isAnyElementVisible} onTopOffsetPowerChange={handleTopOffsetPowerChange} ></HomePageDrawings>
            </div>
        </div>
      </main>
    </>
  );
}
