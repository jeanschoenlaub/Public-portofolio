import Link from "next/link";
import Timeline from "./timeline";
import { PanelSVG } from "./panel-svg";
import { useEffect, useState } from "react";
import AboutMe from "./about-me";

interface VisibilityState {
    [key: string]: boolean;
  }
  

export default function Home() {
  const numPanels = 3; // Number of PanelSVGs you want
  const spacing = 30; // Spacing in pixels between each PanelSVG
  const panelHeight= 121;
  const panelWidth= 223;
  const branchLength = 200; // Length of each branch to the right

  const totalHeight = numPanels * panelHeight + (numPanels - 1) * spacing;
  const topOffset = `calc(50vh - ${totalHeight / 2}px)`;
  const totalWidth =  panelWidth + 20 + branchLength;

  const [innerHeight, setInnerHeight] = useState(0);
  const [isElementVisible, setIsElementVisible] = useState<VisibilityState>({ timeline: false, aboutme: false });

  useEffect(() => {
    // Set the initial innerHeight
    setInnerHeight(window.innerHeight);

    // Scroll event handler
    const handleScroll = () => {
      const newVisibility: VisibilityState = {};

      // List of element selectors to check
      const elementsToCheck = ['timeline', 'aboutme'];

      elementsToCheck.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisibility[id] = rect.top < 100;
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
    <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8" style={{ maxWidth: '210mm' }}> {/* A4 paper width */}
          <nav className="flex justify-end space-x-6 mb-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
            <Link href={"/about/"} className="underline-custom-mint-green font-semibold">About</Link>
          </nav>

        
            <div id="aboutme" className={`flex  p-2 mt-12 ${isElementVisible['aboutme'] ? 'border-2 border-yellow-400' : ''}`}>
                <AboutMe></AboutMe>
            </div> 

            <div id="timeline" className={` p-2 mt-12 ${isElementVisible['timeline'] ? 'border-2 border-yellow-400' : ''}`}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> What I have been up to </h2>
                <Timeline></Timeline>
            </div>

            {/* Render multiple PanelSVGs at a certain vertical spacing, centered horizontally */}
            <div className="fixed top-0 left-2 transform -translate-x-1/2" style={{ top: topOffset }}>
                {[...Array(numPanels)].map((_, index) => (
                <div key={index} style={{ position: 'absolute', top: `${index * (panelHeight + spacing)}px`, width: '200px' }}> {/* width should match the SVG width */}
                    <PanelSVG />
                </div>
                ))}
            </div>

            {/* SVG line positioned relative to the bottom of the viewport */}
            <svg
                className="fixed bottom-0 left-2 " style={{ bottom: topOffset }}
                width={`${totalWidth}px`}
                height={`${innerHeight}px`}
                viewBox={`0 0 ${totalWidth} ${innerHeight}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* This path should draw a line from the bottom to the top */}
                <path 
                d={`M1,${innerHeight} 
                    V${innerHeight - (totalHeight + spacing)}
                    H ${panelWidth + 100}           
                `}
                stroke="#B87333"
                strokeWidth="3"
                fill="none"
                />
            </svg>
            </div>
    </main>
    </>
  );
}

