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
            <h1 className="text-4xl md:text-5xl font-bold mb-7 text-tarawera-500">{user.name}</h1>
            <ul>
                <li>
                    <a className="mb-5 text-tarawera-500 hover:underline"
                        href={`mailto:${user.email}`}>
                        {user.email}
                    </a>
                </li>
                <li>
                    <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tarawera-500 hover:underline"
                    >
                        {user.website}
                    </a>
                </li>
            </ul>
            <br />
            <h2 className="text-3xl font-bold mb-5 text-tarawera-500">Posts by {user.name}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post: Post) => (
                    <div className="card bg-tarawera-50 shadow-xl" key={post.id}>
                        <div className="card-body">
                            <h2 className="card-title text-tarawera-700 text-left">{post.title}</h2>
                            <p className="text-tarawera-600 text-left">{post.body.substring(0, 100)}...</p>
                            <div className="card-actions justify-between items-center mt-4">
                                <Link href={`/users/${post.userId}`} className="text-tarawera-500 hover:underline">
                                    {user.name}
                                </Link>
                                <Link href={`/posts/${post.id}`} key={post.id} className="btn bg-tarawera-500 text-white">Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}