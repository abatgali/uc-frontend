import RolesListSuperAdmin from "@/components/brand/RolesListSuperAdmin";
import React from "react";

const DashboardMembers = () => {
  return (
    <main className="min-h-screen">
      <section className="max-w-xl mx-auto space-y-8 sm:py-5">
        <h1>Members</h1>
        <RolesListSuperAdmin />
      </section>
    </main>
  );
};

export default DashboardMembers;
