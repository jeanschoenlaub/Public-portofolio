import Link from 'next/link';
import React, { useState, useEffect, Dispatch } from 'react';

// All possible sections
type Section = 'home' | 'projects' | 'blog';

// Props type definition
interface NavigationProps {
  activeSection: Section;
  onThemeChange: (theme: 'light' | 'dark') => void;
}
  
// The Navigation component
const Navigation: React.FC<NavigationProps> = ({ activeSection, onThemeChange }) => {
  // Helper function to determine the CSS classes based on activeSection
  const linkClassName = (section: Section) =>
    `underline-custom-mint-green ${activeSection === section ? 'font-semibold' : ''}`;

  const [isDayTheme, setIsDayTheme] = useState(true);
  // Update handleChange to call onThemeChange
  const handleChange = () => {
    if (isDayTheme){
      onThemeChange('light'); // Inform the parent about the change
    }
    else{
      onThemeChange('dark'); // Inform the parent about the change
    }
    setIsDayTheme(!isDayTheme);
  };


  return (
    <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat">
      <Link href="/" className={linkClassName('home')}>
        Home
      </Link>
      <Link href="/projects" className={linkClassName('projects')}>
        Doing
      </Link>
      <Link href="/blog" className={linkClassName('blog')}>
        Writing
      </Link>
      <label className="inline-flex items-center cursor-pointer">
        <input 
          type="checkbox"
          checked={isDayTheme}
          onChange={handleChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-amber-300 rounded-full peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-base font-medium font-montserrat text-gray-900 dark:text-gray-300">
          {isDayTheme ? "Night" : "Day"}
        </span>
      </label>
    </nav>
  );
};

export default Navigation;
