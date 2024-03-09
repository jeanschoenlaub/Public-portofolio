import Head from "next/head";
import Link from "next/link";
import DrawingsProjects from "../../components/drawings/proj-drawings";
import ProjectList from "../../components/projects/project-list/project-list";
import { personalInfo } from "~/data/personal-info";
import Navigation from "~/components/NavBar";


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
        
        <Navigation activeSection='projects'/>

            <div id="projects" className={` p-2 mt-12 min-w-[600px]  `}>
                <ProjectList></ProjectList>
            </div>

            <div id="link-to-gh-repo" className="mt-4 text-gray-500 text-sm"> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>


            <div className="hidden lg:block">
                <DrawingsProjects></DrawingsProjects>
            </div>
    </div>
      </main>
    </>
  );
}
