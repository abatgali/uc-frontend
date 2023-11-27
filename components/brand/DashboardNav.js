import React from "react";
import Image from "next/image";
import logo from "@/public/umaa-white.png";
import ButtonAccount from "../ButtonAccount";
export default function DashboardNav() {
  return (
    <>
      <div className="shadow-white shadow-lg fixed inset-0 z-20 h-16 flex justify-around items-center bg-gradient-to-l from-amber-500 via-amber-600 to-amber-700">
        <Image src={logo} alt="UMAA Logo" width={150} height={150} />
        <ButtonAccount />
      </div>
      <div className="mb-14"></div>
    </>
  );
}
