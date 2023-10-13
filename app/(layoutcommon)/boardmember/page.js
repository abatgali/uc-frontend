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
    </div>
  );
}
