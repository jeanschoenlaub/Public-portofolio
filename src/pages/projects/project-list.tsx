import Link from "next/link";
import { projectData } from "../../data/projects";
import Image from 'next/image';
import { useEffect, useState } from "react";

interface ProjectList {
    title: string;
    description: string;
    full_text: string;
    video: string;
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    tags: { [key: number]: string | undefined }; // Allow undefined values
    image: string;
}

// Function to convert a title into a slug
const slugify = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

export default function ProjectList() {
    const recentProjects = [...projectData];
    const [filteredProjects, setFilteredProjects] = useState(recentProjects);
    const [selectedType, setSelectedType] = useState('All');

    // Assuming 'type' in projectData is a string that matches one of the options
    const options = ['All', 'Software', 'Solar', 'Data', 'Manufacturing', 'CAD' ]; // Add other options as needed

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
    };

    useEffect(() => {
        if (selectedType === 'All') {
            setFilteredProjects(projectData);
        } else {
            const filtered = projectData.filter(project =>
                Object.values(project.type).includes(selectedType)
            );
            setFilteredProjects(filtered);
        }
    }, [selectedType]);

  
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
           <div className="ml-2 flex overflow-x-auto py-2">
                {options.map((option, index) => (
                    <button
                    key={index}
                    onClick={() => handleTypeChange(option)}
                    className={`whitespace-nowrap px-6 py-2 font-medium text-lg 
                        ${selectedType === option ? 'border-b-2 border-custom-mint-green font-semibold text-custom-mint-green' : 'border-b border-gray-300 text-gray-600 hover:text-gray-900'} 
                        focus:outline-none`}>
                    {option}
                    </button>
                ))}
            </div>

                {/* Render filteredProjects instead of recentProjects */}
                {filteredProjects.map((project, index) => (
                        <div key={index} className="border-2 border-custom-mint-green flex bg-white rounded-lg my-10 shadow-md">
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
                        <div className="p-4 w-1/2 space-y-2">
                            {/* Project Title and Date*/}
                            <div>
                                <span className="text-xl tracking-tight font-bold ">
                                    {project.title}
                                </span>
                                <span className="ml-2 font-medium md:font-medium text-xs md:text-base text-gray-500">
                                    {`(`+project.date+`)`}
                                </span>
                            </div>
                
                            {/* Description */}
                            <div className="font-light text-gray-500 md:text-lg">
                            {project.description}
                            </div>
                
                            {/* Project Tags */}
                            <div className="text-sm text-gray-800">
                            <span className="text-gray-500">
                            </span>
                            {renderTags(project.tags)}
                            </div>

                            <div className="flex justify-end">
                                <div className="flex w-40 justify-center items-center border py-1 px-2 rounded-lg border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white ">
                                    <Link href={`/projects/${slugify(project.title)}`}>
                                        <div className=" font-semibold text flex items-center">
                                        Read More 
                                        <svg className="w-4 h-4 ml-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </>
      );
  }