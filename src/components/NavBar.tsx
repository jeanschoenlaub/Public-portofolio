import Link from 'next/link';
import React from 'react';

// All possible sections
type Section = 'home' | 'projects' | 'blog';

// Props type definition
interface NavigationProps {
  activeSection: Section;
}

// The Navigation component
const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  // Helper function to determine the CSS classes based on activeSection
  const linkClassName = (section: Section) =>
    `underline-custom-mint-green ${activeSection === section ? 'font-semibold' : ''}`;

  return (
    <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat">
      <Link className={linkClassName('home')} href="/">
        Home
      </Link>
      <Link className={linkClassName('projects')} href="/projects">
        Doing
      </Link>
      <Link className={linkClassName('blog')} href="/blog">
        Writing
      </Link>
      {/* <button 
          className="underline-custom-mint-green flex items-center" 
          onClick={() => {window.open('https://seagnal.substack.com/', '_blank')}}
        >
          
        Newsletter
        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"/>
          </svg>
      </button> */}
    </nav>
  );
};

export default Navigation;