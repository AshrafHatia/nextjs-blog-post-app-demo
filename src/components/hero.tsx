"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero bg-gradient-to-r from-blue-600 to-green-400 min-h-80 py-10 text-white rounded-lg shadow-lg">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        I&apos;m <span className="text-yellow-300">Ashraf,</span>
                        <br />
                        Software Developer
                    </h1>
                    <p className="py-4">
                        with over 4 years of experience in backend development, e-commerce platforms, and web technologies. 
                        I am currently based in the UAE, and I hold a Master&apos;s degree in Computer Applications from CHARUSAT University.
                    </p>
                    <Link href="/posts" className="btn bg-tarawera-300 text-white">Checkout Posts Listing</Link>
                </div>
            </div>
        </div>
    );
}