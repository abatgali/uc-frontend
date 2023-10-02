import React from "react";

export default function eventCardAlt() {
  return (
    <>
      <div className="md:w-[40em] bg-gray-500 my-3 flex flex-col md:flex-row h-96 md:h-48 w-full hover:shadow-xl">
        <div className="bg-black w-full  h-3/5 md:h-full md:w-1/2 object-cover overflow-hidden">
          {/* <img
            className="  h-auto w-full object-center"
            src={event.imageURL}
            alt={event.name}
          /> */}
        </div>
        <div className="bg-white p-4 h-3/5 md:h-full md:w-1/2">
          {/* <h2
            className={`text-lg leading-5 font-medium text-black ${oswald.className} mb-2`}
          >
            {event.name}
          </h2> */}

          {/* <a
            href={`/register/${event.id}`}
            className="mt-auto float-right relative"
          >
            <div className="p-2 text-center w-24 bg-black text-gray-200 hover:text-white hover:bg-orange-500 relative top-2">
              Register
            </div>
          </a> */}
        </div>
      </div>
    </>
  );
}
