import Head from "next/head";
import Link from "next/link";
import AboutMe from "./home/about-me";
import Timeline from "./home/timeline";
import Hobbies from "./home/hobbies";
import CableSVG from "./home/cable-svg";
import { useEffect, useState } from "react";
import Projects from "./home/projects";
import Blog from "./home/blog";

interface VisibilityState {
  [key: string]: boolean;
}


export default function Home() {

  const [isElementVisible, setIsElementVisible] = useState<VisibilityState>({ timeline: false, aboutme: false });

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
          console.log(rect.bottom)
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

  return (
    <>
      <Head>
        <title>Jean Schoenlaub</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8" style={{ maxWidth: '210mm' }}> {/* A4 paper width */}
          <nav className="flex justify-end space-x-6 mb-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green font-semibold ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
          </nav>

          <div id="aboutme" className={`flex  p-2 mt-12 ${isElementVisible['aboutme'] ? 'border-2 border-yellow-400' : ''}`}>
                <AboutMe></AboutMe>
            </div> 

            <div id="projects" className={` p-2 mt-12 ${isElementVisible['projects'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> What I've been up to </h2>
                <Projects></Projects>
            </div>

            <div id="timeline" className={` p-2 mt-12 ${isElementVisible['timeline'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> It's about the journey </h2>
                <Timeline></Timeline>
            </div>

            <div id="blog" className={` p-2 mt-12 ${isElementVisible['blog'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> It's about the journey </h2>
                <Blog></Blog>
            </div>

            <div id="hobbies" className={` p-2 mt-12 ${isElementVisible['hobbies'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> But also </h2>
                <Hobbies></Hobbies>
            </div>

            <CableSVG></CableSVG>

        </div>
      </main>
    </>
  );
}
