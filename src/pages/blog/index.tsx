import Link from "next/link";
import { DrawingsWindTurbines } from "../../components/drawings/wind-turbines";
import Navigation from "~/components/NavBar";
import { useState } from "react";
import { BlogPostsList } from "~/components/blog/blog-posts-list";


export default function PostList () {

  const [theme, setTheme] = useState('light'); // Default theme or fetch from localStorage

  // This function is passed to Navigation and updates the parent's state
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      <main className={`${theme === 'dark' ? ' bg-gray-900' : 'bg-custom-beige'} p-4`}>
        <div className="container px-2 lg:px-8 w-full lg:w-1/2 mx-0 lg:mx-auto">
        
        <Navigation activeSection='blog' onThemeChange={handleThemeChange} />

            <div id="about-blog" className={` p-2 mt-12 min-w-[600px] ${theme === 'dark' ? 'text-gray-200': 'text-black-200'} `}>
                Most recent writings:
            </div>

            <div id="blog-posts" className={` p-2 mt-2 min-w-[600px]  `}>
                <BlogPostsList theme={theme}></BlogPostsList>
            </div>

            <div id="link-to-gh-repo" className={` mt-4 mb-4  text-sm" ${theme === 'dark' ? 'text-gray-400': 'text-gray-500  '}`}>
              Like this content ? You can subscribe to my weekly newsletter Seagnal, where I explore technology and sustainability trends
            </div>

            <div id='subscribe-to-my-newsletter' className="flex items-center justify-center">
              <iframe className="rounded-xl bg-custom-beige" src="https://seagnal.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: '#FAF3E0' }} ></iframe>
            </div>

            <div id="link-to-gh-repo" className={` mt-4  text-sm" ${theme === 'dark' ? 'text-gray-400': 'text-gray-500  '}`}> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>


            <div className="hidden lg:block">
              <DrawingsWindTurbines animationDuration={5}></DrawingsWindTurbines>
            </div>
          </div>
      </main>
    </>
  );
}
