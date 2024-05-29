import prisma from "@/config/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  await prisma.post.delete({
    where: {
      id: Number(params.postId),
    },
  });

  revalidatePath("/posts");

  return NextResponse.json({ message: "ok" });
}
