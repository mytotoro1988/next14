"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createPost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  //validate check

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  await prisma.post.create({
    data: {
      title,
      body,
      show: true,
    },
  });

  //revalidate
  revalidatePath("/posts");
}

export async function deletePost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  //validate check
  const id = formData.get("id") as string;
  console.log(id);

  await prisma.post.update({
    where: {
      id: +id,
    },
    data: {
      show: false,
    },
  });

  //revalidate
  revalidatePath("/posts");
}

export async function signUp(formData: FormData) {
  
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  await prisma.user.create({
    data: {
      username,
      password
    },
  });

}
