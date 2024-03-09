import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Navigation from '~/components/NavBar';
import { blogPostsData } from '~/data/blog-posts';

interface BlogPostProps {
  blog: {
    title: string;
    full_text: string;
    date: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-custom-beige p-4">
        <div className="lg:container px-2 lg:px-8 w-full lg:w-3/5 mx-0 lg:mx-auto ">
          
          <Navigation activeSection='blog'/>

          <div  className={` p-2 mt-12 `}>
              {/* Go Back Button */}
              <Link href="/blog"> 
                <div className="text-custom-mint-green text-lg hover:underline mb-4 inline-block">&larr; Go back to all blog posts</div>
              </Link>

              {/* Project Details */}
              <div>
                  <div className="flex justify-center items-end mb-6">
                      <span className="text-xl font-extrabold tracking-tight">
                          {blog.title}
                      </span>
                  </div>

                  {/* Full Text */}
                  <div className="mt-4 text-gray-800">
                      <div className='prose text-lg w-full' dangerouslySetInnerHTML={{ __html: blog.full_text }}>
                        {/* HTML content will be rendered here */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
    
  );
};


export const getStaticPaths: GetStaticPaths = () => {
const paths = blogPostsData.map((blog) => ({
    params: { slug: slugify(blog.title) },
}));

return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = (context) => {
const slug = context.params?.slug;
const blog = blogPostsData.find((blog) => slugify(blog.title) === slug);

if (!blog) {
    return { notFound: true };
}

return { props: { blog } };
};  

export default BlogPost;

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
