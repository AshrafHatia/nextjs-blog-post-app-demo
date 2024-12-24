"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Hero() {
    const pathname = usePathname();

    return (
        <div className="hero bg-slate-400 min-h-80 py-10">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">Hello there</h1>
                    <p className="py-4">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link href="/posts" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
}