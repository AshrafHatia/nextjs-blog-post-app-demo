"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './postcarousel.module.css'; // Correct import path

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface PostCarouselProps {
    apiUrl: string;
}

export default function PostCarousel({ apiUrl }: PostCarouselProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const limit = 10;
            const res = await fetch(`${apiUrl}/posts?_start=0&_limit=${limit}`);
            console.log(res); // Check the response in the console
            const data: Post[] = await res.json();
            setPosts(data);
        }
        fetchPosts();
    }, [apiUrl]);

    return (
        <div className={`${styles.carouselContainer} mx-auto max-w-7xl p-4`}>
            <h2 className="text-2xl font-bold text-center mb-4">Latest Posts</h2>
            <div className="carousel carousel-center rounded-box space-x-4">
                {posts.map((post) => (
                    <div className="carousel-item p-2" key={post.id}>
                        <div className="card bg-tarawera-50 shadow-xl">
                            <div className="card-body flex flex-col justify-between">
                                <div>
                                    <h2 className="card-title text-tarawera-500">{post.title}</h2>
                                    <p className="text-tarawera-300">{post.body.substring(0, 100)}...</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <Link href={`/users/${post.userId}`} key={post.userId} className="text-tarawera-500 hover:underline">
                                        View Author
                                    </Link>
                                    <Link href={`/posts/${post.id}`} className="btn bg-tarawera-500 text-white">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}