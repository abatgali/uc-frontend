"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import toast from "react-hot-toast";

export default function RolesListSuperAdmin() {
  const supabase = createClientComponentClient();
  const [roles, setRoles] = useState([]);
  const [editrole, setEditRole] = useState([]);

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
    const addEventListeners = () => {
      const editButtons = document.querySelectorAll(".edit-button");
      console.log(editButtons);
      editButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const role_id = event.target.dataset.roleId;
          const role_name = event.target.dataset.roleName;
  
          openModal(role_id, role_name);
        });
      });
    };
    // This function will be called after the roles are set

    // Call the function to add the event listeners
    addEventListeners();
  }, [roles]);

  const openModal = (role_id, role_name) => {
    document.getElementById(role_name + "_modal").showModal();
  };

  //   const { data, error } = await supabase
  //     .from("roles")
  //     .update({ profile_id: member })
  //     .eq("id", role)
  //     // .select();

  //   if (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   } else {
  //     setEditRole(data);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      await fetchRoles();
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left">
          <thead className="">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-500">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-500"></th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {roles.map((role) => (
              <>
                <tr key={role.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center gap-2 mx-auto">
                    {role.role}
                  </td>
                  <td className="hidden">
                    <div>
                      <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                      >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                      </select>
                    </div>
                  </td>
                  {role.id === 1 ? (
                    <td></td>
                  ) : (
                    <td>
                      <button
                        key={role.id}
                        onClick={openModal(role.id, role.role)}
                        className="edit-button bg-blue-300 hover:bg-gray-700 text-white font-bold py-2 px-4"
                      >
                        Edit
                      </button>
                    </td>
                  )}
                </tr>
                <div id="modal_content">
                  <dialog
                    id={role.role + "_modal"}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        Press ESC key or click the button below to close
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
