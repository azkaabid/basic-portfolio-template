"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white py-4 fixed w-full top-0 left-0 z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Azka Abid</h1>
        <ul className="flex space-x-6">
          <li><Link href="#home" className="hover:text-indigo-300">Home</Link></li>
          <li><Link href="#about" className="hover:text-indigo-300">About</Link></li>
          <li><Link href="#projects" className="hover:text-indigo-300">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-indigo-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
