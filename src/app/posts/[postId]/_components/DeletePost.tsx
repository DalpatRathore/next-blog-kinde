"use client";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const DeletePost = ({ postId }: { postId: number }) => {
  const router = useRouter();

  const onDelete = async (postId: number) => {
    const response = await fetch(`/api/post/${postId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    // console.log(result);

    if (result.id) {
      router.push(`/posts`);
    }
  };
  return (
    <Button onClick={() => onDelete(postId)} variant={"destructive"}>
      Delete
    </Button>
  );
};
export default DeletePost;
