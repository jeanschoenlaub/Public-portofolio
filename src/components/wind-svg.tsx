import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SunSVGProps {
    width: number;
    height: number;
  }
  
export const WindSVG = ({ width, height }: SunSVGProps) => {

    const [rotation, setRotation] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);


    useEffect(() => {

        if (typeof window === 'undefined') {
            return;
          }

        let lastScrollY = window.scrollY;
        let animationTimeout: NodeJS.Timeout;
        
    
        const handleScroll = () => {
            setIsAnimating(true); // Start or continue the animation on scroll
            const scrollDiff = window.scrollY - lastScrollY;
            lastScrollY = window.scrollY;
            setRotation(prevRotation => prevRotation + Math.abs(scrollDiff * 0.3));
    
            // Reset the timeout on each scroll
            clearTimeout(animationTimeout);
            animationTimeout = setTimeout(() => {
                setIsAnimating(false); // Stop the animation after a period of inactivity
            }, 2000); // 5 seconds after the last scroll
        };
    
        window.addEventListener('scroll', handleScroll);

        
        const interval = setInterval(() => {
            if (!isAnimating) return;
                setRotation(prevRotation => prevRotation * 0.99 );
        }, 250);
    
        // Clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
            clearTimeout(animationTimeout);
        };
    }, [isAnimating]);

    const bladeAnimation = {
        rotate: rotation + 50 ,
        transition: { duration: 5, ease: "linear" }
    };


    return (
     <svg width={width} height={height} viewBox="0 -200 650 800" fill="none" xmlns="http://www.w3.org/2000/svg">
     <g id="Group 22">
     <g id="Tower">
     <path id="Vector 193" d="M259 582L273 230" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 194" d="M320 582L306 229" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 195" d="M273 230.5C285.887 236.234 293.114 235.509 306 230.5" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 196" d="M270 300C284.839 305.687 293.161 304.968 308 300" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 197" d="M270 300C284.839 305.687 293.161 304.968 308 300" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 198" d="M267 369C284.963 376.108 295.037 375.21 313 369" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 199" d="M264 439C283.916 447.53 295.085 446.452 315 439" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 200" d="M262 510C283.868 519.952 296.132 518.694 318 510" stroke="#BCB5B5" stroke-width="5"/>
     <path id="Vector 201" d="M258 582C282.602 593.373 296.399 591.936 321 582" stroke="#BCB5B5" stroke-width="5"/>
     <circle id="Ellipse 5" cx="289" cy="206" r="30.5" fill="#FAF3E0" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 202" d="M278.5 194C278.5 194 284.5 185 295.5 188.5C306.5 192 308 204.5 308 204.5" stroke="#BCB5B5" stroke-width="3"/>
     </g>
     <motion.g animate={bladeAnimation} style={{originX: 0.552, originY: 0.397}}>
     <g id="Blade1"  >
     <g id="Group 14">
     <path id="Vector 184" d="M306.645 232.204C298.534 237.031 293.097 237.43 284 236.268" stroke="#BCB5B5" stroke-width="3"/>
     <g id="Group 12">
     <path id="Vector 183" d="M345.639 459.691L328.158 462.99" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 184_2" d="M341.258 433.101L323.777 436.401" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 185" d="M294.511 293.294L331.205 478.073C341.402 506.619 344.476 501.613 347.654 474.33" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 186" d="M324.5 291.058C318.606 286.7 315.902 281.671 312.164 268.001" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 187" d="M306.161 231.563L312.164 268.001" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 188" d="M285 235.557L295.22 297.6" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 189" d="M323.405 289.156L347.354 476.528" stroke="#BCB5B5" stroke-width="3"/>
     </g>
     </g>
     <path id="Rectangle 12" d="M315.684 293.863L305.823 234C298.741 239.28 294.615 240.244 286.915 237.569L296.776 297.432L315.684 293.863Z" fill="#FAF3E0"/>
     <path id="Rectangle 13" d="M340.25 431L322.499 291.5L296.688 296.896L323.901 433.5L340.25 431Z" fill="#FAF3E0"/>
     <path id="Polygon 2" d="M322.499 291.5C317.355 286.898 315.345 283.089 312.69 275L315.492 293L322.499 291.5Z" fill="#FAF3E0"/>
     </g>
     <g id="Blade2">
     <g id="Group 14_2">
     <path id="Vector 184_3" d="M303.173 178.684C311.409 183.295 314.472 187.804 318.015 196.263" stroke="#BCB5B5" stroke-width="3"/>
     <g id="Group 12_2">
     <path id="Vector 183_2" d="M480.686 31.1714L492.284 44.6606" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 184_4" d="M459.849 48.2595L471.446 61.7488" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 185_2" d="M362.146 158.647L503.822 34.4806C523.445 11.3767 517.572 11.217 492.357 22.1067" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 186_2" d="M345.215 133.794C344.387 141.078 341.384 145.934 331.415 156.006" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 187_2" d="M302.86 179.424L331.415 156.006" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 188_2" d="M316.899 195.753L365.52 155.88" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 189_2" d="M344.115 135.694L494.41 21.2668" stroke="#BCB5B5" stroke-width="3"/>
     </g>
     </g>
     <path id="Rectangle 12_2" d="M352.052 140.026L305.14 178.498C313.253 181.991 316.151 185.082 317.684 193.088L364.597 154.616L352.052 140.026Z" fill="#FAF3E0"/>
     <path id="Rectangle 13_2" d="M458.533 50.1832L346.598 135.306L364.176 154.962L468.873 63.0922L458.533 50.1832Z" fill="#FAF3E0"/>
     <path id="Polygon 2_2" d="M346.598 135.306C345.184 142.062 342.891 145.707 337.213 152.051L351.4 140.624L346.598 135.306Z" fill="#FAF3E0"/>
     </g>
     <g id="Blade3">
     <g id="Group 14_3">
     <path id="Vector 184_5" d="M257.576 206.498C257.452 197.06 259.825 192.153 265.38 184.855" stroke="#BCB5B5" stroke-width="3"/>
     <g id="Group 12_3">
     <path id="Vector 183_3" d="M41.0704 126.524L46.9536 109.735" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 184_6" d="M66.2879 136.025L72.1711 119.237" stroke="#E58080" stroke-width="5"/>
     <path id="Vector 185_3" d="M210.738 165.445L32.3683 104.833C2.54831 99.3906 5.34631 104.556 27.3849 120.949" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 186_3" d="M197.68 192.534C204.401 189.608 210.109 189.781 223.816 193.379" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 187_3" d="M258.374 206.399L223.816 193.379" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 188_3" d="M265.495 186.076L206.655 163.906" stroke="#BCB5B5" stroke-width="3"/>
     <path id="Vector 189_3" d="M199.875 192.536L25.631 119.591" stroke="#BCB5B5" stroke-width="3"/>
     </g>
     </g>
     <path id="Rectangle 12_3" d="M199.658 183.497L256.432 204.888C255.401 196.115 256.629 192.06 262.796 186.729L206.022 165.337L199.658 183.497Z" fill="#FAF3E0"/>
     <path id="Rectangle 13_3" d="M68.6115 136.202L198.297 190.58L206.531 165.529L74.6212 120.794L68.6115 136.202Z" fill="#FAF3E0"/>
     <path id="Polygon 2_3" d="M198.298 190.58C204.855 188.426 209.159 188.59 217.492 190.335L200.502 183.762L198.298 190.58Z" fill="#FAF3E0"/>
     
     </g>
     </motion.g>
     
     </g>
     </svg>
     
)}

