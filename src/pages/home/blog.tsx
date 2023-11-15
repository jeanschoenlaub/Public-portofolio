import Link from "next/link";
import { blogData } from "../../data/blog";
import Image from 'next/image';


export default function Blog() {
    const recentBlogs = [...blogData].slice(0, 3);
  
    return (
        <div>
          {recentBlogs.map((blog, index) => (
            <Link className="block border-2 border-custom-mint-green bg-white rounded-lg mx-2 md:mx-5 my-4 shadow-md" href={`/blog`} key={index}>

                {/* Content */}
                <div className="p-4 w-full space-y-2">
                  {/* Blog Title */}
                  <div className="text-lg tracking-tight font-bold">
                    {blog.title}
                  </div>

                  {/* Blog Date */}
                  <div className="font-light text-gray-500 md:text-lg">
                    {blog.date}
                  </div>
                </div>
            </Link>
          ))}
          <div className="flex justify-center mt-4">
            <Link href="/blogs" className="w-52 text-center py-1 px-2 rounded-lg border border-custom-mint-green text-custom-mint-green hover:bg-custom-mint-green hover:text-white font-semibold">
                Check out more cool stuff
            </Link>
          </div>
        </div>
    );
}