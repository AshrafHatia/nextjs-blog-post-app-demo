"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-tarawera-600 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                alt="Logo"
                src="/icons/logo/1024-logo.png"
                className="hover:bg-tarawera-200"
                width="45"
                height="45"
              />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-tarawera-300">
              NextJs Blog
            </span>
          </Link>
          <sup className="ml-0.5">
            <Link href="https://github.com/AshrafHatia/nextjs-blog-post-app-demo"
              target="_blank" title="GitHub Repository" rel="noopener noreferrer" >
              <Image
                alt="GitHub"
                src="/icons/github.svg"
                className="rounded-lg hover:bg-tarawera-200"
                width="22"
                height="22"
              />
            </Link>
          </sup>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-tarawera-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-tarawera-400"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-tarawera-600 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`block py-2 px-3 ${pathname === link.href ? "text-white bg-tarawera-500 rounded-lg md:bg-transparent md:text-tarawera-50 hover:text-tarawera-900 shadow-lg" : "text-tarawera-300 rounded hover:bg-tarawera-600 md:hover:bg-transparent md:border-0 md:hover:text-tarawera-100"} md:p-0`}
                  href={link.href} title={link.label}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}