import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Jean Schoenlaub</title>
        <meta name="description" content="My awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8" style={{ maxWidth: '210mm' }}> {/* A4 paper width */}
          <nav className="flex justify-end space-x-4 mb-4 text-2xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green font bold">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
            <Link href={"/"} className="underline-custom-mint-green">About</Link>
          </nav>

          <h2 className="text-4xl font-bold mb-2">Lorem Ipsum</h2>
          <p className="mb-4">
            I’m the
          </p>

          {/* ... rest of your content ... */}
        </div>
      </main>
    </>
  );
}
