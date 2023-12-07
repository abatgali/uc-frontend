"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export default function RolesListSuperAdmin() {
  const supabase = createClientComponentClient();
  const [roles, setRoles] = useState([]);
  const [profile, setProfile] = useState([]);
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, full_name, email");

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
  const fetchRoles = async () => {
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
      await fetchRoles();
    };

    fetchData();
  }, []);

  const appointMember = async (e, role, profile) => {
    try {
      const { data, error } = await supabase
        .from("roles")
        .update({ profile_id: profile })
        .eq("id", role)
        .select();
      // console.log(role, profile);
      if (error) {
        console.log(error);
        toast.error(error.message);
      } else if (data.length === 0) {
        console.log("No data found");
        toast.error("Something went wrong. Please try again later. (no data))");
      } else {
        console.log(data);
        toast.success("Role updated.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
          <div className="">
            <div>
              <div className="whitespace-nowrap px-4 py-2 font-medium text-gray-500">
                Role
              </div>
              <div className="whitespace-nowrap px-4 py-2 font-medium text-gray-500"></div>
              <div></div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {roles.map((role) => (
              <>
                <div
                  key={role.id}
                  className="flex flex-row w-full justify-around hover:bg-gray-100"
                >
                  <div className=" whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex-1 gap-2 mx-auto">
                    {role.role}
                  </div>
                  {role.id === 1 ? (
                    <div></div>
                  ) : (
                    <div id={`${role.id}_edit`}>
                      <button
                        onClick={() =>
                          document
                            .getElementById(role.role + "_modal")
                            .showModal()
                        }
                        className="edit-button bg-blue-300 hover:bg-gray-700 text-white font-bold py-2 px-4"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
                <div key={`${role.id}_modal_content`}>
                  <dialog
                    id={role.role + "_modal"}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Appoint {role.role}</h3>
                      <p className="py-4">
                        You may appoint a member to this role by selecting their
                        name from the dropdown below.
                      </p>
                      <div>
                        <select
                          name={"pickMember_" + role.id}
                          id={"pickMember_" + role.id}
                          key={`pickMember_${role.id}`}
                          onChange={(e) => setProfile(e.target.value)}
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-lg"
                        >
                          <option value="">Please select</option>
                          {members.map((member) => (
                            <option key={member.id} value={member.id}>
                              {member.full_name} ({member.email})
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="modal-action">
                        <form
                          method="dialog"
                          onSubmit={(e) => {
                            appointMember(e, role.id, profile);
                          }}
                        >
                          {/* if there is a button in form, it will close the modal */}
                          <button
                            className="btn mr-5 bg-red-400  hover:bg-red-700 text-white rounded-none"
                            type="button"
                            onClick={() => {
                              document
                                .getElementById(role.role + "_modal")
                                .close();
                            }}
                          >
                            Close
                          </button>
                          <button
                            className="btn bg-green-700 text-white hover:bg-green-600 rounded-none"
                            type="submit"
                          >
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
