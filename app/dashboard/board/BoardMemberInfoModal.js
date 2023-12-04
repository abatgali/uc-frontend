import React from "react";

const BoardMemberInfoModal = () => {
  return (
    <div>
      <label
        htmlFor="my_modal"
        className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
      >
        Details
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello There!</h3>
          <p className="py-4">Find below my contact information.</p>
          <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-5 lg:p-4">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" for="remark">
                  Remark
                </label>

                <textarea
                  className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                  placeholder="Remark"
                  rows="8"
                  id="remark"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  //   type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal">
          Close
        </label>
      </div>
    </div>
  );
};

export default BoardMemberInfoModal;
