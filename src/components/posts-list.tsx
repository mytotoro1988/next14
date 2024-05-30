import Link from "next/link";
import prisma from "@/lib/db";
import { deletePost } from "@/actions/actions";
export default async function PostsList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany({
    where: { show: true },
    select: {
      id: true,
      title: true,
    },
  });
  {
    console.log(posts);
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-5">
          <Link href={`/posts/${post.id}`} className="text-2xl ">
            {post?.title}
          </Link>
          <form action={deletePost}>
            <button
              name="id"
              value={post.id}
              className="ml-4 bg-blue-500 h-10 px-5 rounded text-white"
              type="submit"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
