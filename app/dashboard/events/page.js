import AddEventModal from "@/components/brand/AddEventModal";
import React from "react";
export const dynamic = "force-dynamic";
import Image from "next/image";

const DashboardEvents = async () => {
  let categories = [];
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Manage Events
          </h2>
          <p className="mx-auto mt-4 mb-4 max-w-md text-gray-500">
            Publish new events and manage existing ones.
          </p>
          <AddEventModal />
        </header>
        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {categories?.map((category) => (
            <li key={category.category}>
              <a href="#" className="group relative block">
                <Image
                  src={category.image_url}
                  alt={`event category image for ${category.category}`}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {category.category}
                  </h3>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    View
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashboardEvents;
