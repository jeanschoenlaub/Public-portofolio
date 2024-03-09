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
       Projects
      </Link>
      <Link className={linkClassName('blog')} href="/blog">
        Blog
      </Link>
    </nav>
  );
};

export default Navigation;