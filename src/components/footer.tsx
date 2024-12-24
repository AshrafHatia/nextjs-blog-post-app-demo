"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-tarawera-600 rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image alt="Logo" src="/icons/logo/1024-logo.png" className="h-8 rounded-lg hover:bg-tarawera-300" width="32" height="32" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-tarawera-300">Ashraf Hatia</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-tarawera-300 sm:mb-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-tarawera-200 sm:mx-auto lg:my-8" />
                <div className="grid grid-flow-col gap-4 justify-center">
                    <a href="https://x.com/AshrafHatia/" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/twitterx.svg" alt="x"
                            className="w-[35px] h-[35px] rounded-lg bg-tarawera-500 hover:bg-tarawera-100"
                            width="35"
                            height="35"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ashrafhatia/" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/linkedin.svg" alt="LinkedIn"
                            className="w-[35px] h-[35px] rounded-lg bg-tarawera-500  hover:bg-tarawera-100"
                            width="35"
                            height="35" />
                    </a>
                    <a href="https://github.com/AshrafHatia" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/github.svg" alt="GitHub"
                            className="w-[35px] h-[35px] rounded-lg bg-tarawera-500 hover:bg-tarawera-100"
                            width="35"
                            height="35" />
                    </a>
                </div>
                <br />
                <span className="block text-sm text-tarawera-50 sm:text-center">
                    © {new Date().getFullYear()} <Link href="/" className="hover:underline">Ashraf Hatia™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}