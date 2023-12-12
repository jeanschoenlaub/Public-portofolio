import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projectData } from "../../data/projects";
import React from 'react';

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
    <div>
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={500} height={300} />
      <p>{project.description}</p>
      {/* Render other project details */}
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
