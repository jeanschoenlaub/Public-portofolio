import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { projectData } from "../../data/projects";
import React, { useState } from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { TableOfContents } from '../../components/projects/toc';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    full_text: string;
    date: string;
    tags: Record<number, string>;
    image: string;
    video: string;
  };
}

const ProjectPage: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
    <main className=" bg-custom-beige p-4">
    <div className="lg:container px-2 lg:px-8 w-full lg:w-3/5 mx-0 lg:mx-auto ">
      <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
        <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
        <Link href={"/projects"} className="underline-custom-mint-green font-semibold ">Projects</Link>
        {/* <Link href={"/blog"} className="underline-custom-mint-green ">Blog</Link> */}
      </nav>

      <div className="w-1/4 hidden lg:flex justify-center align-center">
          <div className="fixed text-gray-800 top-1/4 left-8">
            <TableOfContents htmlContent={project.full_text} />
          </div>
      </div>

      <div  className={` p-2 mt-12 `}>
              {/* Go Back to Project List Button */}
              <Link href="/projects"> 
                <div className="text-custom-mint-green text-lg hover:underline mb-4 inline-block">&larr; Go Back to Project List</div>
              </Link>

              {/* Project Details */}
              <div>
                  <div className="flex justify-center items-end mb-6">
                      <span className="text-5xl font-extrabold tracking-tight">
                          {project.title}
                      </span>
                  </div>

                  {/* Tags */}
                  <div className="flex justify-center align-center mb-4">
                    <span className=" text-gray-600 ">
                        {renderTags(project.tags)}
                      </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-lg mb-4">{project.description}</p>
                  
                  {/* Image */}
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="rounded-lg border-2 border-custom-mint-green cursor-pointer"
                      onClick={toggleModal}
                    />
                  </div>

                  <ImageModal
                    src={project.image}
                    alt={project.title}
                    isOpen={isModalOpen}
                    onClickOutside={toggleModal}
                  />

                  {/* Full Text */}
                  <div className="mt-4  text-gray-800">
                    <div className='prose text-lg w-full' dangerouslySetInnerHTML={{ __html: project.full_text }}>
                      {/* HTML content will be rendered here */}
                    </div>
                  </div>

              </div>
            </div>
        </div>
  </main>
    
  );
};


const ImageModal: React.FC<{
  src: string;
  alt: string;
  isOpen: boolean;
  onClickOutside: () => void;
}> = ({ src, alt, isOpen, onClickOutside }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClickOutside}>
      {/* Close Button */}
      <button
        onClick={onClickOutside}
        style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}
        className="text-red-600 bg-white rounded-full p-1 focus:outline-none"
        aria-label="Close"
      >
        {/* You can use an SVG or a Unicode character for the cross */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <img src={src} alt={alt} className="max-w-full max-h-full" />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
const paths = projectData.map((project) => ({
    params: { slug: slugify(project.title) },
}));

return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = (context) => {
const slug = context.params?.slug;
const project = projectData.find((project) => slugify(project.title) === slug);

if (!project) {
    return { notFound: true };
}

return { props: { project } };
};  

export default ProjectPage;

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
