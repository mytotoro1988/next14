import React from "react";
import { signUp } from "@/actions/actions";

export default function Form() {
  return (
    <form
      action={signUp}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
      <div className="flex justify-start">
        <div className="w-40 mr-2">Tên đăng nhập: </div>
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="username"
          placeholder="Title for new post"
          required
        />
      </div>
      <div className="flex justify-start">
        <div className="w-40 mr-2">Mật khẩu: </div>
        <div>
          <input
            className="border rounded px-3 h-10"
            type="password"
            name="password"
            placeholder="Title for new post"
            required
          />
        </div>
      </div>

      <button
        className="bg-blue-500 h-10 px-5 rounded text-white"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
