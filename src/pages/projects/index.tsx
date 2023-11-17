import Head from "next/head";
import Link from "next/link";
import { motion } from 'framer-motion';
import { WindSVG } from "~/components/wind-svg";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface VisibilityState {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  [key: string]: boolean;
}


export default function Home() {

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

            {/* Conditional rendering of LeftDrawings for medium devices and up */}
            <div className="hidden md:block">
              <WindSVG></WindSVG>
              
            </div>
        </div>
      </main>
    </>
  );
}
