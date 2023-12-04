import React from "react";
import BoardMemberCard from "./BoardMemberCard";
export const dynamic = "force-dynamic";

const DashboardBoard = () => {
  return (
    <div className=" mx-auto mt-4 grid grid-flow-row gap-3 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <BoardMemberCard />
      <BoardMemberCard />
      <BoardMemberCard />
      <BoardMemberCard />
      <BoardMemberCard />
    </div>
  );
};

export default DashboardBoard;
