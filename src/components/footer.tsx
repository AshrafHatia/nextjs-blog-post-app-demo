"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://x.com/AshrafHatia/" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/twitterx.svg" alt="x"
                            className="w-[35px] h-[35px]"
                            width="35"
                            height="35"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ashrafhatia/" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/linkedin.svg" alt="LinkedIn"
                            className="w-[35px] h-[35px]"
                            width="35"
                            height="35" />
                    </a>
                    <a href="https://github.com/AshrafHatia" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/github.svg" alt="GitHub"
                            className="w-[35px] h-[35px]"
                            width="35"
                            height="35" />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Ashraf Hatia</p>
            </aside>
        </footer>
    );
}