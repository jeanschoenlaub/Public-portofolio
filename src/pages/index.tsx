import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "~/context/ThemeContext";

import HomePageDrawings from "../components/drawings/home-drawings";

import Navigation from "~/components/NavBar";
import { AboutMe } from "~/components/home/about-me";
import { Timeline } from "~/components/home/timeline";
import { Projects } from "~/components/home/projects";

type VisibilityState = Record<string, boolean>;


export default function Home() {

  const [isElementVisible, setIsElementVisible] = useState<VisibilityState>({});
  const [topOffsetPower, setTopOffsetPower] = useState(0);

  const isAnyElementVisible = Object.values(isElementVisible).some(Boolean);

  const handleTopOffsetPowerChange = (value:number) => {
      setTopOffsetPower(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newVisibility: VisibilityState = {};
      const tresholdPixel = topOffsetPower - 20; // 20 px is where the drawing is

      const elementsToCheck = ['timeline', 'aboutme','projects','hobbies', 'blog'];
      elementsToCheck.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const elBounds = element.getBoundingClientRect();
          const intersectsPowerLine = elBounds.top < tresholdPixel &&  elBounds.bottom > tresholdPixel;
          newVisibility[id] = intersectsPowerLine
        }
      });

      setIsElementVisible(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [topOffsetPower]);


  const { theme } = useTheme();

  const powerOnBorder = theme === 'dark' ? 'border-purple-800' : 'border-yellow-400'
  const powerOffBorder = theme === 'dark' ? 'border-gray-900' : 'border-custom-beige'

  return (
    <>
      <Head>
        <title> Jean Schoenlaub</title>
        <meta name="My Portofolio" content="A bit about me, what I've done and what I think" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${theme === 'dark' ? ' bg-gray-900' : 'bg-custom-beige'} py-4 w-full`}>
        <div className="container px-4 sm:px-10 w-full lg:w-1/2 mx-auto">

          <Navigation activeSection='home' />

          <div id="aboutme" className={`border-0 lg:border-l-4 min-w-[500px] relative z-50 p-2 mt-10
              ${isElementVisible.aboutme ? powerOnBorder: powerOffBorder}`}>
                <AboutMe theme={theme}></AboutMe>
            </div>

            <div id="projects" className={`p-2 border-0 min-w-[600px] relative z-50 lg:border-l-4 mt-10
                ${isElementVisible.projects ? powerOnBorder: powerOffBorder}`}>
                <h2 className={`text-3xl tracking-tight font-medium mt-2 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}> What I&apos;ve been up to </h2>
                <Projects theme = {theme}></Projects>
            </div>

            <div id="timeline" className={` p-2 border-0 min-w-[500px] lg:border-l-4 mt-10
               ${isElementVisible.timeline ? powerOnBorder: powerOffBorder}`}>
                <h2 className={`text-3xl tracking-tight font-medium mt-2 mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}> It&apos;s about the journey </h2>
                <Timeline theme={theme}></Timeline>
            </div>

            <div id="link-to-gh-repo" className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400': 'text-gray-500'}`}> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>

            {/* Conditional rendering of LeftDrawings for medium devices and up */}
            <div className="hidden lg:block -z-50">
              <HomePageDrawings isAnyElementVisible={isAnyElementVisible} onTopOffsetPowerChange={handleTopOffsetPowerChange} theme={theme} ></HomePageDrawings>
            </div>
        </div>
      </main>
    </>
  );
}
