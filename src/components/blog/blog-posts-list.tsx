import Link from "next/link";
import { blogPostsData } from "../../data/blog-posts";

// Function to convert a title into a slug
const slugify = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

export default function ProjectList() {
    ;
  
    return (
    <>
        {blogPostsData.map((post, index) => (
            <div key={index} className="mb-2">
                    <span className="ml-2 font-medium lg:font-medium text-xs lg:text-base text-gray-500">
                        {post.date+` - `}
                    </span>
                    <Link href={`/blog/${slugify(post.title)}`}>
                    <span className="font-semibold underline-custom-mint-green">
                        {post.title}
                    </span>
                    </Link>
            </div>
        ))}
    </>
    );
  }