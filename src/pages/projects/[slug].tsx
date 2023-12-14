import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projectData } from "../../data/projects";
import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import ReactMarkdown from 'react-markdown';

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
    <div className="md:container px-2 md:px-8 w-full md:w-1/2 mx-0 md:mx-auto ">
      <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
        <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
        <Link href={"/projects"} className="underline-custom-mint-green font-semibold ">Projects</Link>
        <Link href={"/blog"} className="underline-custom-mint-green ">Blog</Link>
      </nav>

      

      <div  className={` p-2 mt-12 `}>
              {/* Go Back to Project List Button */}
              <Link href="/projects"> 
                <div className="text-custom-mint-green text-lg hover:underline mb-4 inline-block">&larr; Go Back to Project List</div>
              </Link>

              {/* Project Details */}
              <div>
                  <div className="mb-2">
                      <span className="text-3xl tracking-tight font-bold ">
                          {project.title}
                      </span>
                      <span className="ml-2 font-medium md:font-medium text-xl md:text-base text-gray-500">
                          {`(`+project.date+`)`}
                      </span>
                  </div>

                  {/* Tags */}
                  <div className="">
                    <span className=" text-gray-600 ">
                        {renderTags(project.tags)}
                      </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  {/* Image */}
                  <div className="flex justify-center">
                    <Image src={project.image} alt={project.title} width={800} height={600} className="rounded-md border-2 border-custom-mint-green" />
                  </div>

                  {/* Full Text */}
                  <div className="mt-4 text-gray-800">
                    <div className='prose'>
                    <ReactMarkdown>{project.full_text}</ReactMarkdown>
                    </div>
                  </div>

                  {/* Video (if available) */}
                  {project.video && (
                    <div className="mt-4">
                       <ReactPlayer
                          url={project.video}
                          controls = {true}
                        />
                    </div>
                  )} 
              </div>
            </div>
        </div>
  </main>
    
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
