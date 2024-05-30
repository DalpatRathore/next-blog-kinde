"use server";

import prisma from "@/config/db";
import { formSchema } from "@/lib/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const updatePost = async (
  postId: number,
  values: z.infer<typeof formSchema>
) => {
  try {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }
    formSchema.safeParse(values);

    const { title, content } = values;

    await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        content,
      },
    });

    revalidatePath("/posts");
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Failed to update post");
  }
};
