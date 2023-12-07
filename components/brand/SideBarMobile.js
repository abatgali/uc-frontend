"use client";

import React from "react";
import Link from "next/link";
import { FiMenu as Icon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import LogoWhite from "./LogoWhite";

export default function MenuBarMobile({ setter }) {
  return (
    <>
      <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-gradient-to-r from-amber-800  to-gray-800 flex [&>*]:my-auto px-2 justify-between shadow-md shadow-white">
        <button
          className="text-4xl flex text-white"
          onClick={() => {
            setter((oldVal) => !oldVal);
          }}
        >
          <Icon />
        </button>
        <div className="pt-1">
          <LogoWhite />
        </div>
        <Link className="text-3xl flex text-white" href="/dashboard/account">
          <FaUser />
        </Link>
      </nav>
    </>
  );
}
