import Link from "next/link";
import { blogPostsData } from "../../data/blog-posts";

// Function to convert a title into a slug
const slugify = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

interface BlogPostsListProps {
    theme:string;
}

export const BlogPostsList: React.FC<BlogPostsListProps> = ({theme}) => {
    
    return (
    <>
        {blogPostsData.map((post, index) => (
            <div key={index} className="mb-2 flex">
                    <span className={`ml-2 font-medium lg:font-medium text-xs lg:text-base 
                    ${theme === 'dark' ? 'text-gray-400': 'text-gray-500  '}`}>
                        {post.date+` - `}
                    </span>
                    {post.link ? (
                        // If there's a direct link, use an anchor tag to redirect
                        <Link href={post.link} target="_blank" className={` ml-1 flex font-semibold justify-center items-center
                            ${theme === 'dark' ? 'text-gray-200 underline-teal-500': 'text-gray-800 underline-custom-mint-green '}
                            `}>
                            
                            {post.title}
                            <svg className={`w-4 h-4 ml-2  `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.8a1.2 1.2 0 0 1-1.2 1.2H5.2A1.2 1.2 0 0 1 4 18.8V7.2A1.2 1.2 0 0 1 5.2 6h4.6m4.4-2H20v5.8m-7.9 2L20 4.2"/>
                            </svg>
                        </Link>
                    ) : (
                    <Link href={`/blog/${slugify(post.title)}`} className={`ml-1
                    ${theme === 'dark' ? 'text-gray-200': 'text-gray-800  '}`}>
                    <span className="font-semibold underline-custom-mint-green">
                        {post.title}
                    </span>
                    </Link>)
                    }
            </div>
        ))}
    </>
    );
  }