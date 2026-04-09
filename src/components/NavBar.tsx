import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from '~/context/ThemeContext';

type Section = 'home' | 'projects' | 'blog';

interface NavigationProps {
  activeSection: Section;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const { theme, mounted, handleThemeChange } = useTheme();
  const isDayTheme = theme === 'light';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleChange = () => {
    handleThemeChange(isDayTheme ? 'dark' : 'light');
  };

  const linkClassName = (section: Section) =>
    `${!isDayTheme ? 'underline-teal-500' : 'underline-custom-mint-green'} ${activeSection === section ? 'font-semibold' : ''}`;

  const navClassName = `ml-4 flex flex-no-shrink ${isMobile ? 'justify-start' : 'justify-end'} space-x-2 sm:space-x-6 mb-4 sm:mr-4 text-xl font-montserrat ${!isDayTheme ? 'text-white' : 'text-black'}`;

  return (
    <nav className={navClassName}>
      <Link href="/" className={linkClassName('home')}>
        Being
      </Link>
      <Link href="/projects" className={linkClassName('projects')}>
        Doing
      </Link>
      <Link href="/blog" className={linkClassName('blog')}>
        Writing
      </Link>
      {mounted && (
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDayTheme}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className={`ms-3 text-base font-medium font-montserrat ${!isDayTheme ? 'text-gray-200' : 'text-black'}`}>
            {!isDayTheme ? "Night" : "Day"}
          </span>
        </label>
      )}
    </nav>
  );
};

export default Navigation;
