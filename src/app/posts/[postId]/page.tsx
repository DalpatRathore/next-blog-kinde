import Link from "next/link";

const postsUrl = "https://dummyjson.com/posts";
type PostDetails = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};
const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = await fetch(`${postsUrl}/${params.postId}`);
  const post: PostDetails = await response.json();
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-5">Post Details:</h2>

      <div className="flow-root rounded-lg border border-gray-100 p-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">{post.title}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Views</dt>
            <dd className="text-gray-700 sm:col-span-2">{post.views}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Tags</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {post.tags.map(tag => (
                <span key={tag} className="mx-2 capitalize">
                  {tag}
                </span>
              ))}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Reactions</dt>
            <dd className="text-gray-700 sm:col-span-2 space-x-2">
              <span>Likes: {post.reactions.likes}</span>
              <span>Dislikes: {post.reactions.dislikes}</span>
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Content</dt>
            <dd className="text-gray-700 sm:col-span-2">{post.body}</dd>
          </div>
        </dl>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
          href={"/posts"}
        >
          <span className="font-medium transition-colors group-hover:text-white">
            Back to Posts
          </span>

          <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default PostIdPage;
