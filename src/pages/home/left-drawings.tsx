import { useEffect, useState } from "react";
import { PanelSVG, PowerFullSVG } from "../../components/panel-svg";
import { PowerSVG } from "../../components/panel-svg";

interface LeftDrawingsProps {
    isAnyElementVisible: boolean;
  }

export default function LeftDrawings ( { isAnyElementVisible }: LeftDrawingsProps) {
    const numPanels = 3; // Number of PanelSVGs you want
    const spacing = 30; // Spacing in pixels between each PanelSVG
    const panelHeight= 121;
    const panelWidth= 223;
    const branchLength = 200; // Length of each branch to the right
    const FullPowerWidth = 93
  
    const totalHeight = numPanels * panelHeight + (numPanels - 1) * spacing;
    const topOffset = `calc(50vh - ${totalHeight / 2}px)`;
    //const bottomOffsetpower = `calc(100vh - ${totalHeight}+${topOffset}+${spacing}px)`;

    const totalWidth =  panelWidth + 20 + branchLength;

    // Vertical and Horizontal dims based on window size
    const [rightOffsetPanelDivs, setRightOffsetPanelDivs] = useState(0); //The space between the edge of the panel SVG anf the first div
    const [innerHeight, setInnerHeight] = useState(0);
    const [topOffsetPanels, setTopOffsetPanels] = useState(0); // The space between the top of screen and first panel to have them centered vertically
    const [bottomOffsetPower, setBottomOffsetPower] = useState(0); // The space between bottom of screen and the power converter

    useEffect(() => {
        const calculateValues = () => {
            
            const vwUnitInPixels = window.innerWidth / 100;
            const twentyFiveVW = 25 * vwUnitInPixels;
            const offsetPx = twentyFiveVW - panelWidth;
            setRightOffsetPanelDivs(offsetPx);

            const vhUnitInPixels = window.innerHeight / 100;
            const calcTopOffsetPanels = 50 * vhUnitInPixels - totalHeight/ 2
            setTopOffsetPanels(calcTopOffsetPanels)
            const calcBottomOffsetPower =  totalHeight + calcTopOffsetPanels +spacing + 20;
            setBottomOffsetPower(calcBottomOffsetPower)
            setInnerHeight(window.innerHeight);
        };
        

       // Initial calculation
       calculateValues();

       // Set up the resize event listener
       window.addEventListener('resize', calculateValues);

       // Clean up
       return () => {
           window.removeEventListener('resize', calculateValues);
       };
   }, []);

   useEffect(() => {
    console.log(bottomOffsetPower)
            console.log(topOffsetPanels)
            console.log(totalHeight)
   },[bottomOffsetPower, topOffsetPanels])
    

  return (
    <>
       {/* Render multiple PanelSVGs at a certain vertical spacing, centered horizontally */}
       <div className="fixed top-0 left-2 transform -translate-x-1/2" style={{ top: topOffsetPanels }}>
                {[...Array(numPanels)].map((_, index) => (
                <div key={index} style={{ position: 'absolute', top: `${index * (panelHeight + spacing)}px`, width: '200px' }}> {/* width should match the SVG width */}
                    <PanelSVG />
                </div>
                ))}
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
                H ${panelWidth +rightOffsetPanelDivs - FullPowerWidth +  30}
                `}
                stroke="#B87333"
                strokeWidth="3"
                fill="none"
            />
        </svg>
                

        <div>
            {isAnyElementVisible ? (
                // If any element is visible, show PowerFullSVG
                <div className="fixed bottom-0 left-0 transform -translate-x-1/2" style={{ bottom: bottomOffsetPower+7, left: panelWidth + rightOffsetPanelDivs - 10}}>
                    <PowerFullSVG />
                </div>
            ) : (
                // Otherwise, show PowerSVG
                <div className="fixed bottom-0 left-20 transform -translate-x-1/2" style={{ bottom: bottomOffsetPower-1, left: panelWidth + rightOffsetPanelDivs -32 }}>
                    <PowerSVG />
                </div>
            )}
        </div>
    
    </>
  );
}
