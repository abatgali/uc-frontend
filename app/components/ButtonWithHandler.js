'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs/dist";

export default function ButtonWithHandler() {
  const supabase = createClientComponentClient();

  const handleSignOut = () => {
    supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSignOut}>
    <button
      type="submit"
      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
    >
      Logout
    </button>
    </form>
  );
}
