import Head from "next/head";
import Link from "next/link";
import AboutMe from "./home/about-me";
import Timeline from "./home/timeline";
import { useEffect, useState } from "react";
import Projects from "./home/projects";
import Blog from "./home/blog";
import LeftDrawings from "./home/left-drawings";

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
          if (id=="projects"){
            console.log(rect.bottom)
            console.log(topOffsetPower)
          }
        }
      });
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

  return (
    <>
      <Head>
        <title>Jean Schoenlaub</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-custom-beige p-4">
        <div className="md:container px-2 md:px-8 w-full md:w-1/2 mx-0 md:mx-auto ">
          <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green font-semibold ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
          </nav>

          <div id="aboutme" className={`border-0 md:border-2 p-2 mt-12 ${isElementVisible.aboutme ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <AboutMe></AboutMe>
            </div> 

            <div id="projects" className={` p-2 border-0 md:border-2 mt-12 ${isElementVisible.projects ? 'border-2 border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> What I&apos;ve been up to </h2>
                <Projects></Projects>
            </div>

            <div id="timeline" className={` p-2 border-0 md:border-2 mt-12 ${isElementVisible.timeline ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> It&apos;s about the journey </h2>
                <Timeline></Timeline>
            </div>

            <div id="blog" className={` p-2 border-0 md:border-2 mt-12 ${isElementVisible.blog ? ' border-yellow-400' : 'border-custom-beige'}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> Some thoughts </h2>
                <Blog></Blog>
            </div>

            {/* Conditional rendering of LeftDrawings for medium devices and up */}
            <div className="hidden md:block">

              <LeftDrawings isAnyElementVisible={isAnyElementVisible} onTopOffsetPowerChange={handleTopOffsetPowerChange} ></LeftDrawings>
            </div>
        </div>
      </main>
    </>
  );
}
