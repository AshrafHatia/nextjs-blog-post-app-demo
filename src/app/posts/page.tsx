import Link from "next/link";

export default async function PostsPage() {
    const limit = 10;
    const res = await fetch(`${process.env.POST_API_URL}/posts?_start=0&_limit=${limit}`);
    const data = await res.json();
    return (
        <div className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-7">All posts</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {await Promise.all(data.map(async (post: any) => {
                    const userRes = await fetch(
                        `${process.env.POST_API_URL}/users/${post.userId}`
                    );
                    const user = await userRes.json();
                    return (
                        <div className="card bg-base-100 shadow-xl" key={post.id}>
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.body.substring(0, 100)}...</p>
                                <p className="mt-2">
                                    <Link href={`/users/${post.userId}`} key={post.userId} className="text-blue-500 hover:underline">
                                        {user.name}
                                    </Link>
                                </p>
                                <div className="card-actions justify-end">
                                    <Link href={`/posts/${post.id}`} key={post.id} className="btn btn-primary">Read more</Link>
                                </div>
                            </div>
                        </div>
                    );
                }))}
            </ul>
        </div>
    );
}