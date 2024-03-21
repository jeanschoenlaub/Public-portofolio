import Link from "next/link";
import { projectData } from "../../data/projects";
import Image from 'next/image';

// Function to convert a title into a slug
const slugify = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

interface ProjectProps {
  theme:string;
}

export const Projects: React.FC<ProjectProps> = ({theme}) => {
    const recentProjects = [...projectData].slice(0, 3);
  
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    const renderTags = (tags: { [key: number]: string | undefined }) => {
        return Object.values(tags)
          .filter((tag): tag is string => tag !== undefined) // Filter out undefined values
          .map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ));
      };
  
      return (
        <>
          {recentProjects.map((project, index) => (
            <Link href={`/projects/${slugify(project.title)}`} key={index}>
            <div key={index} className={`border-2 flex rounded-lg mx-2 lg:mx-5 my-8 
               ${theme === 'dark' ? 
               ' border-teal-500 text-teal-500 bg-gray-800 rounded-lg  hover:shadow-lg hover:shadow-cyan-300'
               : 
               'bg-white hover:shadow-xl hover:shadow-lime-50 border-custom-mint-green  '}
              `}>
              
              {/* Image */}
              <div className="relative w-1/2 border border-slate-300">
                <Image
                  className="rounded-l-lg object-cover"
                  src={project.image || '/default-project-image.jpg'} // Fallback to default image
                  alt={`${project.title} image`}
                  fill={true} 
                />
              </div>
    
              {/* Content */}
              <div className="p-4 w-1/2">
                {/* Project Title */}
                <div className="text-lg tracking-tight font-bold">
                  {project.title}
                </div>
    
                {/* Description */}
                <div className={`font-light mt-2  ${theme === 'dark' ? 'text-gray-200': 'text-gray-500'} lg:text-lg`}>
                  {project.description}
                </div>
    
                {/* Project Tags */}
                <div className="text-sm mt-6 text-gray-800">
                  <span className="text-gray-500">
                  </span>
                  {renderTags(project.tags)}
                </div>
              </div>
            </div>
            </Link>
          ))}
          <div className="flex justify-center">
            <div className={`flex w-72 justify-center items-center border-2 py-1 px-2 rounded-lg
                    ${theme === 'dark' ? 
                    ' border-teal-500 text-teal-500 hover:bg-cyan-700 hover:text-white rounded-lg  hover:shadow-lg hover:shadow-cyan-300'
                    : 
                    ' border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white rounded-lg  hover:shadow-xl hover:shadow-lime-100'}
                `}>
                <Link href="/projects">
                    <div className="text-lg font-medium text flex items-center">
                        Check out more projects
                    </div>
                </Link>
            </div>
            </div>
            </>
      );
  }