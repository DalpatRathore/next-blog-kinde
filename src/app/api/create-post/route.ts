import prisma from "@/config/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const body = await request.json();
  const data = body.data;

  await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return NextResponse.json({ message: "ok" });
}
