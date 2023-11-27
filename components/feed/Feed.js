"use client";
import React, { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";
import Image from "next/image";
import logo from "@/app/icon.png";

export default function Feed() {
  const supabase = createClientComponentClient();
  const [posts, setPosts] = useState([]);

  // Fetches Posts from Supabase
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.log(error);
      toast.error(error.message);
    }
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    // Run fetchPosts initially
    fetchPosts();

    // Run fetchPosts every 1 minute
    const interval = setInterval(fetchPosts, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [supabase]);

  return (
    <>
      
      {posts.map((post) => (
        <article
          className="rounded-xl border-2 border-gray-100 bg-white"
          key={post.id}
        >
          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
            <a href="#" className="block shrink-0">
                {/* // TODO: Add post author's profile picture 
              {user?.user_metadata?.avatar_url ? (
              <img
                src={user?.user_metadata?.avatar_url}
                alt={user?.user_metadata?.name || "Account"}
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                {user?.user_metadata?.name?.charAt(0) || user?.email?.charAt(0)}
              </span>
            )} */}
              {post?.user_metadata?.avatar_url ? (
              <Image
                src={post?.user_metadata?.avatar_url}
                alt={"Profile picture"}
                className="w-10 h-10 rounded-full shrink-0 "
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-8 h-8 bg-base-200 flex justify-center items-center rounded-md shrink-0 capitalize">
                {post?.content?.charAt(0)}
              </span>
            )}
            </a>

            <div>
              <p className="line-clamp-5 text-lg text-gray-700">
                {post.content}
              </p>
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  {/* // TODO: Author name <p className=" sm:text-xs sm:text-gray-500">
                    Posted by
                    <a href="#" className="font-medium hover:text-gray-700">
                      {" " + post.created_by}
                    </a>
                  </p> 
                  <span className="hidden sm:block" aria-hidden="true">
                    &middot;
                  </span>
                  */}

                </div>
              </div>
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <p className=" sm:text-xs sm:text-gray-500"> 
                  {/* Created at: {" "} */}
                    {new Date(post.created_at).toLocaleDateString()}{" "}
                    {new Date(post.created_at).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
      <article className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <Image
            className="h-10 w-10 rounded-md object-cover"
            src={logo}
            alt="UMAA Logo"
            width={150}
            height={150}
          />
          <div>
            <p className="line-clamp-5 text-normal text-gray-700">
              Welcome to the UMAA Feed & News! This is a place for you to share
              your thoughts, ideas, and questions with the UMAA community.
              Please be respectful and kind to others. We look forward to your participation!
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
