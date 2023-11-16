import Head from "next/head";
import Link from "next/link";
import AboutMe from "./home/about-me";
import Timeline from "./home/timeline";
import Hobbies from "./home/hobbies";
import { useEffect, useState } from "react";
import Projects from "./home/projects";
import Blog from "./home/blog";
import LeftDrawings from "./home/left-drawings";

interface VisibilityState {
  [key: string]: boolean;
}


export default function Home() {

  const [isElementVisible, setIsElementVisible] = useState<VisibilityState>({ timeline: false, aboutme: false });
  const [isAnyElementVisible, setIsAnyElementVisible]= useState(false)

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
          newVisibility[id] = rect.top < 70 && rect.bottom > 60;
        }
      });

      // Update the state with the visibility of elements
      setIsElementVisible(newVisibility);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case elements are already in the desired position
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update isAnyElementVisible based on the latest isElementVisible
    const isVisible = Object.values(isElementVisible).some(isVisible => isVisible);
    setIsAnyElementVisible(isVisible);
  
    //console.log(isVisible); // Will log the current state of visibility
  }, [isElementVisible]);

  return (
    <>
      <Head>
        <title>Jean Schoenlaub</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8 w-1/2">
          <nav className="flex justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green font-semibold ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
          </nav>

          <div id="aboutme" className={`flex border-2 p-2 mt-12 ${isElementVisible['aboutme'] ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <AboutMe></AboutMe>
            </div> 

            <div id="projects" className={` p-2 border-2 mt-12 ${isElementVisible['projects'] ? 'border-2 border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> What I've been up to </h2>
                <Projects></Projects>
            </div>

            <div id="timeline" className={` p-2 border-2 mt-12 ${isElementVisible['timeline'] ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> It's about the journey </h2>
                <Timeline></Timeline>
            </div>

            <div id="blog" className={` p-2 border-2 mt-12 ${isElementVisible['blog'] ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> It's about the journey </h2>
                <Blog></Blog>
            </div>

            <div id="hobbies" className={` p-2 mt-12 ${isElementVisible['hobbies'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> But also </h2>
                <Hobbies></Hobbies>
            </div>

            <LeftDrawings isAnyElementVisible={isAnyElementVisible}></LeftDrawings>

        </div>
      </main>
    </>
  );
}
