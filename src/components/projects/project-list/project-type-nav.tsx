import React, { useEffect, useRef, useState } from 'react';
import styles from './project-list.module.css';

interface ProjectTypeNavProps {
    selectedType: string;
    setSelectedType: (type: string) => void;
    options: string[];
    theme: string;
  }
  
  const ProjectTypeNav: React.FC<ProjectTypeNavProps> = ({
    selectedType,
    setSelectedType,
    theme,
    options = [] //Fallback to empty array if undefined
  }) => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);

    const updateScrollPosition = () => {
    if (scrollContainer.current) {
        setScrollPosition(scrollContainer.current.scrollLeft);
        setMaxScrollPosition(scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth);
    }
    };
    
    useEffect(() => {
        const handleScroll = () => {updateScrollPosition();};
    
        // Update the max scroll position when the component mounts
        updateScrollPosition();
    
        // Check if the currentContainer is not null before adding the event listener
        const currentContainer = scrollContainer.current;
        if (currentContainer) {
            currentContainer.addEventListener('scroll', handleScroll);
        }

        // Return a cleanup function that removes the event listener
        // Check if the currentContainer is not null before removing the event listener
        return () => {
            if (currentContainer) {
            currentContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    
    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -100, behavior: 'smooth' });
            updateScrollPosition();
        }
    };
    
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 100, behavior: 'smooth' });
            updateScrollPosition();
        }
    };

  return (
    <div className="relative flex items-center">
        {scrollPosition > 0 && (
            <button
                onClick={scrollLeft}
                className={` absolute left-0 z-20 p-2 ${theme === 'dark' ?  'bg-gray-900' : 'bg-custom-beige'} ${theme === 'dark' ?  styles.buttonRightOverlayDark : styles.buttonRightOverlayLight}`}
            >
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke={`${theme === 'dark' ?  '#e5e7eb' : '#020617'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
            </button>
        )}

        <div 
            ref={scrollContainer} 
            className={`${styles.hideScrollbar} ${styles.scrollContainer} \
            ml-2 flex overflow-x-auto z-10 py-2`}
        >
            {options.map((option, index) => (
            <button
                key={index}
                onClick={() => setSelectedType(option)} 
                className={`whitespace-nowrap px-6 py-2 font-medium focus:outline-none 
                ${selectedType === option ? 
                    theme === 'dark' ? 
                    'border-b-2 border-teal-500 font-semibold text-teal-500'
                    : 
                    'border-b-2 border-custom-mint-green font-semibold text-custom-mint-green'
                :     
                    theme === 'dark' ? 
                    'hover:cursor-pointer border-b border-gray-600  text-gray-300 hover:text-gray-100' 
                    : 
                    'hover:cursor-pointer border-b border-gray-300 text-gray-600 hover:text-gray-900'
                }
                `}>
                {option}
            </button>
            ))}
        </div>

        {scrollPosition < maxScrollPosition && (
            <button
            onClick={scrollRight}
            className={` absolute right-0 z-20 p-2  ${theme === 'dark' ?  'bg-gray-900' : 'bg-custom-beige'} ${theme === 'dark' ?  styles.buttonRightOverlayDark : styles.buttonRightOverlayLight} `}
            >
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke={`${theme === 'dark' ?  '#e5e7eb' : '#020617'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            </button>
        )}
    </div>
  );
};

export default ProjectTypeNav;

