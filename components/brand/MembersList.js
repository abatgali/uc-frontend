"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export default function MembersList() {
  const supabase = createClientComponentClient();
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("username, full_name");

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      setMembers(data);
      console.log(members);
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
          Members
        </summary>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Username
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {members.map((member) => (
                  <tr key={member.username}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {member.full_name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {member.username}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </a>
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
