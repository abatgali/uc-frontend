"use client";
import Link from "next/link";
import { oswald } from "@/app/pages/_app";
import {  useState } from "react";

import BoardLogin from "@/app/components/boardportal";

export default function BoardPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-950 to-blue-300 ">
      <BoardLogin />
    </div>
  );
}
