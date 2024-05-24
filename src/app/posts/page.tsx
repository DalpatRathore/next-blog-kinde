import PostList from "@/components/PostList";
import { Suspense } from "react";

const PostsPage = async () => {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostList></PostList>
      </Suspense>
    </main>
  );
};
export default PostsPage;
