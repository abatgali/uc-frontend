"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export default function RolesListSuperAdmin() {
  const supabase = createClientComponentClient();
  const [roles, setRoles] = useState([]);
  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("roles")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      setRoles(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMembers();
    };

    fetchData();
  }, []);

  return (
    <>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium rounded-none">
          Roles
        </summary>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center gap-2 mx-auto">
                      {role.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </>
  );
}
