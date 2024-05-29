import { Button } from "@/components/ui/button";
import prisma from "@/config/db";
import { formatDateTime } from "@/lib/formatters";
import { CalendarDays, NotebookPen, PenTool, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeletePost from "./_components/DeletePost";

// const postsUrl = "https://dummyjson.com/posts";
// type PostDetails = {
//   id: number;
//   title: string;
//   body: string;
//   tags: string[];
//   reactions: {
//     likes: number;
//     dislikes: number;
//   };
//   views: number;
//   userId: number;
// };

const isNumeric = (str: string) => {
  return /^\d+$/.test(str);
};

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // const response = await fetch(`${postsUrl}/${params.postId}`);
  // const post: PostDetails = await response.json();
  if (!isNumeric(params.postId)) {
    return notFound();
  }
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.postId),
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-muted-foreground">
        Post Details
      </h2>
      <article className="overflow-hidden rounded-lg shadow border">
        <Image
          alt=""
          width={500}
          height={250}
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6 space-y-5">
          <h3 className="text-xl md:text-2xl lg:text-4xl flex items-center justify-start gap-1 uppercase">
            <PenTool className="w-5 h-5 md:w-8 md:h-8 -rotate-90"></PenTool>
            {post.title}
          </h3>

          <time
            dateTime={`${post.createdAt}`}
            className="text-xs flex items-center justify-start gap-2 text-muted-foreground"
          >
            <CalendarDays className="w-5 h-5"></CalendarDays>
            {formatDateTime(post.createdAt)}
          </time>

          <p className="text-xs md:text-base border-l-4 ml-2 pl-3">
            {post.content}
          </p>
          <div className="flex items-center justify-center gap-5 border-t pt-5">
            <Button variant="default" asChild>
              <Link href={`/update-post/${post.id}`}>Edit</Link>
            </Button>
            <DeletePost postId={post.id}></DeletePost>
          </div>
        </div>
      </article>
      <div className="flex items-center justify-center mt-10">
        <Button asChild size={"lg"} variant={"outline"}>
          <Link href={"/posts"}>
            Back to Posts <Undo2 className="w-5 h-5 ml-2 mb-1"></Undo2>
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default PostIdPage;
