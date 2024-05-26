import React from "react";
import { createPost } from "@/actions/actions";

export default function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text:5xl font-bold mb-5">create post</h1>
      <form action={createPost} className="h-10 space-x-2 px-3">
        <input
          className="border rounded px-3 h-full"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />
        <button
          className="bg-blue-500 h-full px-5 rounded text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
