"use client";
import React from "react";

const UpdateMemberStatusModal = ({ userInfo }) => {
  console.log("userifno", userInfo);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {/* Put this part before </body> tag */}
      <dialog
        id="member_detail_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Update Status for {userInfo?.name}</p>

          {/*  */}

          <div>
            <label
              for="HeadlineAct"
              class="block text-sm font-medium text-gray-900"
            >
              Promote Him/Her to
            </label>

            <select
              name="HeadlineAct"
              id="HeadlineAct"
              class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="">Please select</option>
              <option value="Chairman">Chairman</option>
              <option value="CEO">CEO</option>
              <option value="Marketing Executive">Marketing Executive</option>
              <option value="Marketing Assistant">Marketing Assistant</option>
              <option value="Finance Executive">Finance Executive</option>
              <option value="Finance Assistant">Finance Assistant</option>
              <option value="HR Executive">HR Executive</option>
              <option value="Sports Director">Sports Director</option>
              <option value="Assistant Sports Director">
                Assistant Sports Director
              </option>
              <option value="IDoL Director">IDoL Director</option>
              <option value="IDoL Assistant Director">
                IDoL Assistant Director
              </option>
              <option value="Pageant Director">Pageant Director</option>
              <option value="Pageant Assistant Director">
                Pageant Assistant Director
              </option>
            </select>
          </div>

          {/*  */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        {/*  */}
      </dialog>
    </div>
  );
};

export default UpdateMemberStatusModal;
