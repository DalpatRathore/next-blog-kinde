import Link from "next/link";

const postsUrl = "https://dummyjson.com/posts?limit=10";

const PostList = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(postsUrl);
  const result = await response.json();
  const posts = result.posts;

  return (
    <ul className="py-5 space-y-5">
      {posts.map((post: any) => (
        <li key={post.id} className="">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default PostList;
