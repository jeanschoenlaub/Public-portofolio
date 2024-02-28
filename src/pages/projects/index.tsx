import Head from "next/head";
import Link from "next/link";
import DrawingsProjects from "../../components/drawings/proj-drawings";
import ProjectList from "../../components/projects/project-list/project-list";
import { personalInfo } from "~/data/personal-info";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface VisibilityState {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [key: string]: boolean;
}


export default function Home() {

  return (
    <>
      <Head>
        <title>{personalInfo.firstName} {personalInfo.lastName}</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-custom-beige p-4">
        <div className="lg:container px-2 lg:px-8 w-full lg:w-1/2 custom-mx">
        
          <nav className="flex flex-no-shrink  justify-end space-x-6 mb-4 min-w-[600px] mr-2 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
            <Link href={"/projects"} className="underline-custom-mint-green font-semibold">Projects</Link>
            {/* <Link href={"/blog"} className="underline-custom-mint-green">Blog</Link> */}
          </nav>

            <div id="projects" className={` p-2 mt-12 min-w-[600px]  `}>
                <ProjectList></ProjectList>
            </div>


            <div className="hidden lg:block">
                <DrawingsProjects></DrawingsProjects>
            </div>
    </div>
      </main>
    </>
  );
}
