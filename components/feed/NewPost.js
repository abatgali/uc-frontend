import React from "react";

export default function NewPost() {
  return (
    <>
      <div>
        <label htmlFor="OrderNotes" className="sr-only">
          Order notes
        </label>

        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <textarea
            id="OrderNotes"
            className="w-full resize-none border-none align-top sm:text-sm p-2"
            rows="4"
            placeholder="What's happening?..."
          ></textarea>

          <div className="flex items-center justify-end gap-2 bg-white p-3">

            <button
              type="button"
              className="rounded bg-amber-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-brown-700"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
