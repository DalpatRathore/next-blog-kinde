import { notFound } from "next/navigation";
import UpdatePostForm from "./_components/UpdatePostForm";
import prisma from "@/config/db";

const isNumeric = (str: string) => {
  return /^\d+$/.test(str);
};
const UpdatePostPage = async ({ params }: { params: { postId: string } }) => {
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
    <main className="text-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-5">Update Post</h1>
      <UpdatePostForm post={post}></UpdatePostForm>
    </main>
  );
};
export default UpdatePostPage;
