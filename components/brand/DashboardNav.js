import React from "react";
import Image from "next/image";
import logo from "@/public/umaa-black.png";
export default function DashboardNav() {
  return (
    <>
      <div className="shadow-white shadow-lg fixed inset-0 z-20 h-16 py-2 flex justify-center items-center bg-white">
        <Image src={logo} alt="UMAA Logo" width={150} height={150} />
      </div>
      <div className="mb-10"></div>
    </>
  );
}
