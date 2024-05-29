"use server";

import prisma from "@/config/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updatePost = async (postId: number, values: any) => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

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
};
