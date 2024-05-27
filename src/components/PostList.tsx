import prisma from "@/config/db";
import { formatDateTime } from "@/lib/formatters";
import { CalendarDays, Hash, PenIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const postsUrl = "https://dummyjson.com/posts?limit=10";

const PostList = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // const response = await fetch(postsUrl);
  // const result = await response.json();
  // const posts = result.posts;
  const posts = await prisma.post.findMany({
    orderBy: [{ id: "desc" }],
  });
  return (
    <ul className="w-full max-w-3xl mx-auto py-5 space-y-5">
      {posts.map(post => (
        <li key={post.id} className="flex items-center justify-between gap-5">
          <Button asChild size={"icon"} variant={"outline"} disabled>
            <span className="flex items-center justify-center text-muted-foreground px-1 text-xs">
              <Hash className="w-3 h-3"></Hash> {post.id}
            </span>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={`/posts/${post.id}`} className="flex-1">
              {post.title}
            </Link>
          </Button>
          <Button asChild variant={"outline"} disabled>
            <span className="text-muted-foreground text-xs">
              <CalendarDays className="w-3 h-3 mr-1"></CalendarDays>
              {formatDateTime(post.createdAt)}
            </span>
          </Button>
        </li>
      ))}
    </ul>
  );
};
export default PostList;
