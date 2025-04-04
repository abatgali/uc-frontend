"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";
export default function NewPost() {
  const supabase = createClientComponentClient();
  const [content, setContent] = useState("");

  // Submits New Post to Supabase
  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      if (!content) {
        return toast.error("Please write something.");
      } else if (content.length > 280) {
        return toast.error("Your post is too long.");
      } else {
        const { error } = await supabase.from("posts").insert({
          content: content,
        });
        if (!error) toast.success("Post created!");
      }
    } catch (error) {
      toast.error(`Something went wrong, please try later. (${error.message})`);
    } finally {
      setContent("");
    }
  };

  return (
    <>
      <div className="max-md:mt-6">
        <label htmlFor="newpost" className="sr-only">
          New Post
        </label>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <textarea
            id="newpost"
            className="w-full resize-none border-none align-top sm:text-sm p-2"
            rows="3"
            placeholder="What's happening?..."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>

          <div className="flex items-center justify-end gap-2 bg-white p-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded bg-amber-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-brown-700"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
