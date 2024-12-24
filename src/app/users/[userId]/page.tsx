import Link from "next/link";


export type paramsType = Promise<{ userId: string }>;

export default async function UsersPage(props: { params: paramsType }) {

    const { userId } = await props.params;

    const userRes = await fetch(
        `${process.env.POST_API_URL}/users/${userId}`
    );
    const user = await userRes.json();

    const postsRes = await fetch(`${process.env.POST_API_URL}/posts?userId=${userId}`);
    const posts = await postsRes.json();

    type Post = {
        id: number;
        userId: number;
        title: string;
        body: string;
    };

    return (
        <div className="text-center pt-16 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-7">{user.name}</h1>
            <p className="mb-5">{user.email}</p>
            <h2 className="text-3xl font-bold mb-5">Posts by {user.name}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: Post) => (
                    <div className="card bg-base-100 shadow-xl" key={post.id}>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body.substring(0, 100)}...</p>
                            <p className="mt-2">
                                <Link href={`/users/${post.userId}`} className="text-blue-500 hover:underline">
                                    {user.name}
                                </Link>
                            </p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`} key={post.id} className="btn btn-primary">Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}