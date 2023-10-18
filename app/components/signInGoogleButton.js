"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
const GoogleSignInButton = () => {
  return (
    <button
      onClick={signIn}
      type="submit"
      className="flex w-1/3 justify-center bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <FcGoogle className="h-6 w-6" />
    </button>
  );
};

export default GoogleSignInButton;
