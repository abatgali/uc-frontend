"use client"; // This is a client component 👈🏽

import BtmNav from "@/components/brand/BtmNav";
import DashboardNav from "@/components/brand/DashboardNav";
import Sidebar from "@/components/brand/SideBar";
import MenuBarMobile from "@/components/brand/SideBarMobile";
import { useState } from "react";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page

export default function LayoutPrivate({ children }) {
  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
