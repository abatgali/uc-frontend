"use client";
import Sidebar from "@/components/brand/SideBar";
import MenuBarMobile from "@/components/brand/SideBarMobile";
import { useState } from "react";
export default function DashboardNav({ children }) {
  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen max-md:mt-16 px-2 pb-24">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
