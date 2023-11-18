import { useEffect, useState } from "react";
import { WindSVG } from "~/components/wind-svg";


export default function DrawingsProjects () {
  const [numTurbines, setNumTurbines] = useState(2); // Initial number of turbines
  const spacing = 30; // Spacing in pixels between each turbine
  const turbineHeight = 300; // Height of each turbine
  const turbineWidth = 270; // Height of each turbine
  const totalHeight = numTurbines * turbineHeight + (numTurbines - 1) * spacing;

  const [rightOffsetWindTurbin, setRightOffsetWindTurbin] = useState(0); //The space between the edge of the panel SVG anf the first div
  const [topOffsetWindTurbine, setTopOffsetWindTurbine] = useState(0); // The space between the top of screen and first panel to have them centered vertically

  // Create an array for the turbines
  let turbinesArray = Array.from({ length: numTurbines });

  const calculateValues = () => {
        
    const vwUnitInPixels = window.innerWidth / 100;
    const twentyFiveVW = 25 * vwUnitInPixels;
    const offsetPxWindTurbin = (twentyFiveVW - turbineWidth)/2+ + turbineWidth ; 
    setRightOffsetWindTurbin(offsetPxWindTurbin);
  
    const vhUnitInPixels = window.innerHeight / 100;
    const calcTopOffsetWindTurbinw = 50 * vhUnitInPixels - totalHeight/ 2
    setTopOffsetWindTurbine(calcTopOffsetWindTurbinw)
};

  useEffect(() => {
   // Initial svg placements calcs
   calculateValues();
   // Set up the resize event listener
   window.addEventListener('resize', calculateValues);
   return () => {
       window.removeEventListener('resize', calculateValues);// Clean up
   };
}, []);

  useEffect(() => { // changes the number of turbines and replaces svg on screen size change
    if ((window.innerHeight)< 600){
        setNumTurbines(1)
        calculateValues();
    }
    else {
        setNumTurbines(2); // Update number of turbines for larger height
        calculateValues();
    }
  }, [window.innerHeight])

  return (
    <>
        {/* Wind turbine SVG */}
       <div className="w-1/4 flex justify-center align-center">
          <div className="fixed top-0 right-0 transform -translate-x-1/2" style={{ top: topOffsetWindTurbine, right:rightOffsetWindTurbin}}>
            {turbinesArray.map((_, index) => (
              <div key={index} style={{ position: 'absolute', top: `${index * (turbineHeight + spacing)}px`, width: `${turbineWidth}px`, height: `${turbineHeight}px` }}>
                <WindSVG width={turbineWidth} height={turbineHeight} />
              </div>
            ))}
          </div>
        </div>
    
    </>
  );
}
