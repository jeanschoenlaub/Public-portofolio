import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col  bg-custom-beige p-4">
        <div className="container mx-auto px-8" style={{ maxWidth: '210mm' }}> {/* A4 paper width */}
          <nav className="flex justify-end space-x-6 mb-4 text-xl font-montserrat"> {/* Larger text and Montserrat font */}
            <Link href={"/"} className="underline-custom-mint-green ">Home</Link>
            <Link href={"/"} className="underline-custom-mint-green">Projects</Link>
            <Link href={"/"} className="underline-custom-mint-green">Blog</Link>
            <Link href={"/about/"} className="underline-custom-mint-green font-semibold">About</Link>
          </nav>

          <div className="flex flex-col items-center justify-center text-center">
                <img src="/profile_image.jpeg" alt="Jean's Profile" className="rounded-full w-32 h-32 mb-4" />
                <h1 className="text-2xl font-semibold mb-2">Hey, I’m Jean.</h1>
                <p className="mb-4">An engineer from Switzerland passionate about making the world a better place.</p>
                <div className="flex space-x-4 mb-6">
                    <a href="https://www.linkedin.com/in/jean" className="text-custom-mint-green hover:underline">Linkedin</a>
                    <a href="https://github.com/jean" className="text-custom-mint-green hover:underline">Github</a>
                    <a href="mailto:jeanschoen@hotmail.com" className="text-custom-mint-green hover:underline">Email</a>
                </div>
                <a href="/CV.pdf" className="bg-custom-mint-green text-white font-bold py-2 px-4 rounded hover:bg-green-700" download="Jean_Resume.pdf">
                    Download Resume
                </a>
                </div>

        </div>
      </main>
    </>
  );
}
