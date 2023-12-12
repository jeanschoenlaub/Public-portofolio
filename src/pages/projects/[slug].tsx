import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projectData } from "../../data/projects";
import React from 'react';
import Link from 'next/link';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    full_text: string;
    date: string;
    tags: Record<number, string>;
    image: string;
  };
}

const ProjectPage: React.FC<ProjectProps> = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className=" bg-custom-beige p-4">
    <div className="md:container px-2 md:px-8 w-full md:w-1/2 mx-0 md:mx-auto ">
      <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
        <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
        <Link href={"/projects"} className="underline-custom-mint-green font-semibold ">Projects</Link>
        <Link href={"/blog"} className="underline-custom-mint-green ">Blog</Link>
      </nav>

      

      <div  className={` p-2 mt-12 `}>
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={500} height={300} />
      <p>{project.description}</p>
      {/* Render other project details */}
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
