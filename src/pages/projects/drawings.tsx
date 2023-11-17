import { useEffect, useState } from "react";
import { PanelSVG, PowerFullSVG, SunSVG } from "../../components/panel-svg";
import { PowerSVG } from "../../components/panel-svg";

export default function DrawingsProjects () {


  return (
    <>
        {/* Wind turbine SVG */}
       <div className="w-1/4 flex justify-center align-center">
       <div className="fixed top-8 right-0 transform -translate-x-1/2" style={{ right: 220 }}>
                <div  style={{ position: 'absolute', width: '200px' }}> {/* width should match the SVG width */}
                    <SunSVG height="230" width="215"/>
                </div>
        </div>
        </div>
    
    </>
  );
}
