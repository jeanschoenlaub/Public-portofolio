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
  const turbinesArray = Array.from({ length: numTurbines });

  const calculateValues = () => {
    // Window-dependent code
    const vwUnitInPixels = window.innerWidth / 100;
    const twentyFiveVW = 25 * vwUnitInPixels;
    const offsetPxWindTurbin = (twentyFiveVW - turbineWidth) / 2 + turbineWidth; 
    setRightOffsetWindTurbin(offsetPxWindTurbin);

    const vhUnitInPixels = window.innerHeight / 100;
    const calcTopOffsetWindTurbinw = 50 * vhUnitInPixels - totalHeight / 2;
    setTopOffsetWindTurbine(calcTopOffsetWindTurbinw);
  };

  // Adjust number of turbines based on window size
  const adjustTurbines = () => {
    const newNumTurbines = window.innerHeight < 600 ? 1 : 2;
    setNumTurbines(newNumTurbines);
    calculateValues();
  };

  // Setup and cleanup of window resize listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      calculateValues();
      adjustTurbines();
      window.addEventListener('resize', adjustTurbines);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', adjustTurbines);
      }
    };
  }, []);

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
