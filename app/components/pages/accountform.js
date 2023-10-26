"use client";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState(null);
  const user = session?.user;
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("public.users")
        .select(`fname, username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(user);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <h1>Account</h1>
        <label htmlFor="fullName">Full Name</label>
        <p className="h-96 w-96 bg-gray-500">{user?.fullname}
          </p>
      </div>
      <form action="/auth/signout" method="post">
          <button className="button block bg-black m-10 p-3 text-white" type="submit">
            Sign out
          </button>
        </form>
    </div>
  );
}
