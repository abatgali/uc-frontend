import React from "react";

const BoardMemberCard = () => {
  return (
    <div className="max-w-lg rounded-md">
      <div href="#" className="group relative block">
        <div className="relative h-[350px] sm:h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=" inset-0 h-full w-full object-cover opacity-100"
          />
        </div>

        <div className="bg-gray-100 inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-dark">John Doe</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Details
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCard;
