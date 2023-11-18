import Head from "next/head";
import Link from "next/link";
import { motion } from 'framer-motion';
import { WindSVG } from "~/components/wind-svg";
import Projects from "../home/projects";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface VisibilityState {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [key: string]: boolean;
}


export default function Home() {

  const numTurbines = 3; // Number of turbines
  const spacing = 30; // Spacing in pixels between each turbine
  const turbineHeight = 198; // Height of each turbine

  // Create an array for the turbines
  const turbinesArray = Array.from({ length: numTurbines });

  return (
    <>
      <Head>
        <title>Jean Schoenlaub</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-custom-beige p-4">
        <div className="md:container px-2 md:px-8 w-full md:w-1/2 mx-0 md:mx-auto ">
          <nav className="flex flex-no-shrink justify-end space-x-6 mb-4 mr-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
            <Link href={"/projects"} className="underline-custom-mint-green font-semibold">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
          </nav>

      

            <div id="projects" className={` p-2 border-0 md:border-2 mt-12 `}>
                <h2 className="text-2xl font-semibold mt-2 mb-2"> What I&apos;ve been up to </h2>
                <Projects></Projects>
                <Projects></Projects>
            </div>


            <div className="hidden md:block">
      <div className="fixed top-0 right-48 transform -translate-x-1/2">
        {turbinesArray.map((_, index) => (
          <div key={index} style={{ position: 'absolute', top: `${index * (turbineHeight + spacing)}px`, width: '180px', height: '198px' }}>
            <WindSVG width="180" height="198" />
          </div>
        ))}
      </div>
    </div>
    </div>
      </main>
    </>
  );
}
