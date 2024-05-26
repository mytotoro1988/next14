import React from "react";
import { createPost } from "@/actions/actions";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <input
        className="border rounded px-3 h-10"
        type="text"
        name="title"
        placeholder="Title for new post"
        required
      />
      <textarea
        name="body"
        placeholder="body content"
        className="border rounded px-3 py-2"
        required
        rows={6}
      ></textarea>
      <button
        className="bg-blue-500 h-10 px-5 rounded text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
