
export type paramsType = Promise<{ postId: string }>;

export default async function PostPage(props: { params: paramsType }) {

  const { postId } = await props.params;

  const res = await fetch(
    `${process.env.POST_API_URL}/posts/${postId}`
  );
  const postData = await res.json();

  const userRes = await fetch(
    `${process.env.POST_API_URL}/users/${postData.userId}`
  );
  const userData = await userRes.json();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Post Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-5">{postData.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover insightful content in this article.
        </p>
      </div>

      {/* Post Content Section */}
      <div className="max-w-3xl mx-auto mb-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Post Content</h2>
        <p className="text-lg leading-relaxed text-gray-700">{postData.body}</p>
      </div>

      {/* Author Details Section */}
      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Author Details</h2>
        <div className="space-y-4">
          <p className="text-lg">
            <strong className="text-gray-700">Name:</strong>{' '}
            <span className="text-gray-800">{userData.name}</span>
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Email:</strong>{' '}
            <a
              href={`mailto:${userData.email}`}
              className="text-blue-500 hover:underline"
            >
              {userData.email}
            </a>
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Website:</strong>{' '}
            <a
              href={`http://${userData.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {userData.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}