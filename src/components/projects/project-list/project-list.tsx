import Link from "next/link";
import { projectData } from "../../../data/projects";
import Image from 'next/image';
import { useEffect , useState } from "react";
import ProjectTypeNav from "./project-type-nav";

// Function to convert a title into a slug
const slugify = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

interface ProjectListProps {
    theme: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({theme}) => {
    const [selectedType, setSelectedType] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projectData);
    const options = ['All', '2024', '2023', '2022', '2021'];
  
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
  
    const handleTypeChange = (type: string) => {
      setSelectedType(type);
    };

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
        <ProjectTypeNav
            selectedType={selectedType}
            setSelectedType={handleTypeChange}
            options={options}
            theme={theme}
        />

        {filteredProjects.map((project, index) => (
            <div key={index} className={`border-2 flex rounded-lg mx-2 lg:mx-5 my-8 
            ${theme === 'dark' ? 
            ' border-teal-500 text-teal-500 bg-gray-800 rounded-lg '
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
        
                {/* Card Content */}
                <div className="p-4 w-1/2">

                    {/* Project Title and Date*/}
                    <div>
                        <span className="text-lg tracking-tight font-bold ">
                            {project.title}
                        </span>
                        <span className="ml-2 font-medium lg:font-medium text-xs lg:text-base text-gray-500">
                            {`(`+project.date+`)`}
                        </span>
                    </div>
        
                    {/* Description */}
                    <div className="font-light mt-2 text-gray-500">
                        {project.description}  
                    </div>
        
                    {/* Project Tags */}
                    <div className="text-sm mt-4 text-gray-800">
                        {renderTags(project.tags)}
                    </div>

                    {/* Read More */}
                    <div className="flex mt-4 justify-end">
                        <div className={`flex w-40 justify-center items-center border-2 py-1 px-2 rounded-lg
                            ${theme === 'dark' ? 
                            ' border-teal-500 text-teal-500 hover:bg-cyan-700 hover:text-white rounded-lg  hover:shadow-lg hover:shadow-cyan-300'
                            : 
                            ' border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white rounded-lg  hover:shadow-xl hover:shadow-lime-100'}
                        `}>
                           
                            <Link href={`/projects/${slugify(project.title)}`}>
                                <div className=" font-medium text flex items-center">
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