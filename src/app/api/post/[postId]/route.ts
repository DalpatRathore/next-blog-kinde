import prisma from "@/config/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const post = await prisma.post.delete({
    where: {
      id: Number(params.postId),
    },
  });
  if (post) {
    revalidatePath("/posts");
  }
  //   console.log(post);
  return NextResponse.json(post);
}
