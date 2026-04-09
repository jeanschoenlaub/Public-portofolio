import Link from "next/link";
import { DrawingsWindTurbines } from "../../components/drawings/wind-turbines";
import Navigation from "~/components/NavBar";
import { useTheme } from "~/context/ThemeContext";
import { ProjectList } from "~/components/projects/project-list/project-list";


export default function Home() {

  const { theme } = useTheme();

  return (
    <>
      <main className={`${theme === 'dark' ? ' bg-gray-900' : 'bg-custom-beige'} p-4`}>
        <div className="container px-4 sm:px-8 w-full lg:w-1/2 mx-auto">

        <Navigation activeSection='projects' />

            <div id="projects" className={` p-2 mt-12`}>
                <ProjectList theme={theme}></ProjectList>
            </div>

            <div id="link-to-gh-repo"  className={` mt-4  text-sm ${theme === 'dark' ? 'text-gray-400': 'text-gray-500  '}`}> Like this portofolio ? Check out the github repo
                <Link href="https://github.com/jeanschoenlaub/public-portofolio/tree/main" className="text-blue-500 hover:underline text-sm ml-1">
                    here
                </Link>
            </div>


            <div className="hidden lg:block">
                <DrawingsWindTurbines animationDuration={5} backgroundColor={theme === 'dark' ? 'var(--color-bg-dark)' : 'var(--color-bg-light)'}></DrawingsWindTurbines>
            </div>
        </div>
      </main>
    </>
  );
}
