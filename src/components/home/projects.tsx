import Link from "next/link";
import { projectData } from "../../data/projects";
import Image from 'next/image';

// Function to convert a title into a slug
const slugify = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

interface Project {
    title: string;
    description: string;
    full_text: string;
    video: string;
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    tags: { [key: number]: string | undefined }; // Allow undefined values
    image: string;
  }

export default function Projects() {
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
            <div key={index} className="border-2 border-custom-mint-green flex bg-white rounded-lg mx-2 md:mx-5 my-10 shadow-lg">
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
                <div className="font-light mt-2 text-gray-500 md:text-lg">
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
            <div className="flex w-60 justify-center items-center border-2 py-1 px-2 rounded-lg border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white ">
                <Link href="/projects">
                    <div className=" font-medium text flex items-center">
                        Check out more projects.
                    </div>
                </Link>
            </div>
            </div>
            </>
      );
  }