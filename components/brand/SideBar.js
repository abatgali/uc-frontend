"use client"; // This is a client component 👈🏽

// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { BsInfoSquare, BsEnvelopeAt } from "react-icons/bs";
import { FaUserTie, FaUsers, FaHome } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

import { useRouter } from "next/navigation";
import LogoWhite from "./LogoWhite";
import ButtonAccount from "../ButtonAccount";

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  // Define our base class
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="p-2 flex justify-center">
          <LogoWhite />
        </div>
        <div className="flex flex-col justify-between h-[300px]">
          <div>
            <MenuItem name="Dashboard" route="/dashboard" icon={<FaHome />} />

            <MenuItem
              name="Board"
              route="/dashboard/board"
              icon={<FaUserTie />}
            />
            <MenuItem
              name="Events"
              route="/dashboard/events"
              icon={<MdEmojiEvents />}
            />
            {/* <MenuItem
              name="Account"
              route="/dashboard/account"
              icon={<BsInfoSquare />}
            /> */}

            <MenuItem
              name="Members"
              route="/dashboard/members"
              icon={<FaUsers />}
            />

            <MenuItem name="Contact" route="/contact" icon={<BsEnvelopeAt />} />
          </div>
        </div>
        <span className="items-center justify-center flex">
          <ButtonAccount />
        </span>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
