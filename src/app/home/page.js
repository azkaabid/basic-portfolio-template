import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Link from "next/link";


export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-indigo-900 to-grey-700 text-white min-h-screen">
      <section id="home" className="text-center px-4 py-20 sm:py-40">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I&apos;m Azka Abid</h1>
        <p className="text-lg sm:text-xl mb-6">Frontend Developer | React & Next.js Specialist</p>
        <Link href="https://www.linkedin.com/in/azkaabid57">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
            See My Work
          </button>
        </Link>
      </section>


      <About />
      <Projects />
      <Contact />


    </main>
  );
}