"use client";
import Link from "next/link";
import { oswald } from "@/app/pages/_app";
import { useContext, useEffect, useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import BoardLogin from "@/app/components/boardportal";
import Donate from "@/app/components/donate";

export default function Pitch() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  console.log(user);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-950 to-blue-300 ">
      <BoardLogin />

      {/* <div className="h-fit shadow-xl bg-gray-800 mx-auto flex text-white justify-center mt-4 w-fit p-5">
         {loading ? (
          <div>Loading...</div>
        ) : !user ? (
          <button onClick={handleSignIn} className="m-2 w-24 bg-gray-200 p-2">
            Sign In
          </button>
        ) : (
          <button onClick={handleSignOut} className="m-2 w-24">
            Sign Out
          </button>
        )} 
      </div>
          
      <div className="p-24"></div>
      <div className="h-screen mx-auto flex items-center justify-center py-10"></div>
      <div className="p-24"></div> */}
    </div>
  );
}
