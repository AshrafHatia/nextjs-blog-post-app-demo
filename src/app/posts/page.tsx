import Link from "next/link";

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export default async function PostsPage() {
    const limit = 10;
    const res = await fetch(`${process.env.POST_API_URL}/posts?_start=0&_limit=${limit}`);
    const data: Post[] = await res.json();
    return (
        <div className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-7 text-tarawera-500">All posts</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {await Promise.all(data.map(async (post: Post) => {
                    const userRes = await fetch(
                        `${process.env.POST_API_URL}/users/${post.userId}`
                    );
                    const user = await userRes.json();
                    return (
                        <div className="card bg-tarawera-50 shadow-xl" key={post.id}>
                            <div className="card-body">
                                <h2 className="card-title text-tarawera-700 text-left">{post.title}</h2>
                                <p className="text-tarawera-600 text-left">{post.body.substring(0, 100)}...</p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <Link href={`/users/${post.userId}`} key={post.userId} className="text-tarawera-500 hover:underline">
                                        {user.name}
                                    </Link>
                                    <Link href={`/posts/${post.id}`} className="btn bg-tarawera-500 text-white">Read more</Link>
                                </div>
                            </div>
                        </div>
                    );
                }))}
            </ul>
        </div>
    );
}