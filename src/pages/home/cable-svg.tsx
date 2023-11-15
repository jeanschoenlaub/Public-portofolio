import { useEffect, useState } from "react";
import { PanelSVG } from "./panel-svg";
import { PowerSVG } from "./panel-svg";

export default function CableSVG() {
    const numPanels = 3; // Number of PanelSVGs you want
    const spacing = 30; // Spacing in pixels between each PanelSVG
    const panelHeight= 121;
    const panelWidth= 223;
    const branchLength = 200; // Length of each branch to the right
  
    const totalHeight = numPanels * panelHeight + (numPanels - 1) * spacing;
    const topOffset = `calc(50vh - ${totalHeight / 2}px)`;
    const bottomOffsetpower = `calc(100vh - ${totalHeight}+${topOffset}+${spacing}px)`;
    const totalWidth =  panelWidth + 20 + branchLength;
    const [innerHeight, setInnerHeight] = useState(0);

    useEffect(() => {
        // Set the initial innerHeight
        setInnerHeight(window.innerHeight);
    }, []);
    

  return (
    <>
       {/* Render multiple PanelSVGs at a certain vertical spacing, centered horizontally */}
       <div className="fixed top-0 left-2 transform -translate-x-1/2" style={{ top: topOffset }}>
                {[...Array(numPanels)].map((_, index) => (
                <div key={index} style={{ position: 'absolute', top: `${index * (panelHeight + spacing)}px`, width: '200px' }}> {/* width should match the SVG width */}
                    <PanelSVG />
                </div>
                ))}
        </div>
        <div className="fixed top-0 left-20 transform -translate-x-1/2" style={{  bottom: bottomOffsetpower, left: panelWidth }}>
            <div style={{ position: 'absolute', top: `(panelHeight + spacing)}px`, width: '200px' }}> 
                <PowerSVG />
            </div>
        </div>

        <svg
            className="fixed bottom-0 left-2"
            style={{ bottom: topOffset }}
            width={`${totalWidth}px`}
            height={`${innerHeight}px`}
            viewBox={`0 0 ${totalWidth} ${innerHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            >
            <path 
                d={`
                M 1,${innerHeight} 
                V ${innerHeight - (totalHeight + spacing) - 20}
                a 20,20 0 0 1 20,-20
                H ${panelWidth }
                `}
                stroke="#B87333"
                strokeWidth="3"
                fill="none"
            />
        </svg>

       

    
    </>
  );
}
