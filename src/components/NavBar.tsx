import Link from 'next/link';
import React, { useState, useEffect } from 'react';

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
  
  // Initialize state without assuming the theme (to prevent client server inconsistencies)
  const [isDayTheme, setIsDayTheme] = useState(true);

  useEffect(() => {
    // First, try to get the user's theme preference from localStorage
    const storedThemePreference = localStorage.getItem('theme');

    if (storedThemePreference) {
      // If there's a preference stored, use it to set the theme
      const isStoredThemeDay = storedThemePreference === 'light';
      setIsDayTheme(isStoredThemeDay);
      onThemeChange(isStoredThemeDay ? 'light' : 'dark');
    } else {
      // If no preference is stored, fall back to the system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDayTheme(!systemPrefersDark);
      onThemeChange(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const handleChange = () => {
    const newIsDayTheme = !isDayTheme;
    setIsDayTheme(newIsDayTheme);
    const newTheme = newIsDayTheme ? 'light' : 'dark';
    onThemeChange(newTheme);
    // Store the user's new preference in localStorage
    localStorage.setItem('theme', newTheme);
  };

  const linkClassName = (section: Section) =>
    `${ !isDayTheme ? 'underline-teal-500' : 'underline-custom-mint-green'} ${activeSection === section ? 'font-semibold' : ''}`;


  return (
    <nav className={`ml-4 flex flex-no-shrink justify-end space-x-2 sm:space-x-6 mb-4 sm:mr-4 min-w-[500px] text-xl font-montserrat ${ !isDayTheme ? 'text-white' : 'text-black'}`}>
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
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className={`ms-3 text-base font-medium font-montserrat ${ !isDayTheme ? 'text-gray-200' : 'text-black'}`}>
          {!isDayTheme ? "Night" : "Day"}
        </span>
      </label>
    </nav>
  );
};

export default Navigation;
