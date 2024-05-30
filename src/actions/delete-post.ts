"use server";

import prisma from "@/config/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deletePost = async (postId: number) => {
  try {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    revalidatePath("/posts");
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Failed to delete post");
  }
};
