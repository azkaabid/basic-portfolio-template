'use client';
import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="bg-gray-900 w-full py-6 animate__animated animate__fadeIn animate__delay-5s">
        <div className="text-center text-white">
          <p className="text-lg mb-4">&copy; 2025 Azka Abid. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/azkaabid57" target="_blank" className="text-indigo-400 hover:text-indigo-600">
              LinkedIn
            </a>
            <a href="https://github.com/azkaabid" target="_blank" className="text-indigo-400 hover:text-indigo-600">
              GitHub
            </a>
            <a href="mailto:azkaabid57@gmail.com" className="text-indigo-400 hover:text-indigo-600">
              Email
            </a>
          </div>
        </div>
      </footer>
  );
}
