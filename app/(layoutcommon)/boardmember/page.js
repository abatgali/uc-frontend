"use client";
import Link from "next/link";
import { oswald } from "@/app/pages/_app";
import { useContext, useEffect, useState } from "react";

export default function Pitch() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
  };

  return (
    <div className="h-auto w-full bg-gray-900 ">
      <div className="text-center pt-64 w-2/3 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Board</h2>
        <p className="text-xl text-white max-sm:hidden">
          We are looking for dedicated board members to join the United Chin
          International organization and UC Cup committee. If you are passionate
          about our cause and want to make a difference, don't hesitate to join
          us.
        </p>
      </div>
      <div className="p-24"></div>
      <div className="h-screen mx-auto flex items-center justify-center py-10">
        <div className="w-full h-auto shadow-xl">
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
      <div className="p-24"></div>
    </div>
  );
}
