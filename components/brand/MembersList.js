"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";
import Image from "next/image";

export default function MembersList() {
  const supabase = createClientComponentClient();
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("username, full_name, avatar_url");

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      setMembers(data);
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
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
              <thead className="">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  {/* <th className="px-4 py-2"></th> */}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {members.map((member) => (
                  <tr key={member.username}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center gap-2 mx-auto">
                      <span>
                        {member.avatar_url === null ? (
                          <div
                            className={`h-6 w-6 rounded-full bg-gray-950 flex items-center justify-center text-white text-xs font-light`}
                          >
                            {member.full_name.charAt(0)}
                          </div>
                        ) : (
                          <Image
                            src={member.avatar_url || ""}
                            alt="user pic"
                            width={24}
                            height={24}
                            className=" rounded-xl"
                          />
                        )}
                      </span>
                      {member.full_name}
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
