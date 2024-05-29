"use client";
import { deletePost } from "@/actions/delete-post";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DeletePost = ({ postId }: { postId: number }) => {
  const router = useRouter();

  const onDelete = async (postId: number) => {
    try {
      await deletePost(postId);
      router.refresh();
      router.push(`/posts`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button onClick={() => onDelete(postId)} variant={"destructive"}>
      Delete
    </Button>
  );
};
export default DeletePost;
