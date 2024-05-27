import PostList from "@/components/PostList";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const PostsPage = async () => {
  return (
    <main className="w-full max-w-3xl mx-auto py-10 px-5">
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-muted-foreground uppercase drop-shadow">
        All Posts
      </h1>
      <Suspense fallback={<PostSkeleton />}>
        <PostList></PostList>
      </Suspense>
    </main>
  );
};
export default PostsPage;

const PostSkeleton = () => {
  const skeletonLoadingArray = new Array(10).fill(null);
  return (
    <div className="w-full max-w-3xl mx-auto py-5 space-y-5">
      {skeletonLoadingArray.map((_, index) => (
        <div className="flex items-center justify-center gap-1" key={index}>
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-1/4" />
        </div>
      ))}
    </div>
  );
};
