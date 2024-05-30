"use server";

import prisma from "@/config/db";
import { formSchema } from "@/lib/schema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createPost(values: z.infer<typeof formSchema>) {
  try {
    // Schema validation
    formSchema.safeParse(values);

    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }

    const { title, content } = values;

    await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    revalidatePath("/posts");
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Failed to create post");
  }
}
