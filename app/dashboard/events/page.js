import React from "react";
export const dynamic = "force-dynamic";

const DashboardEvents = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            New Events
          </h2>

          <p class="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" class="group relative block">
              <img
                src="https://plus.unsplash.com/premium_photo-1664304747805-24b97bddf900?q=80&w=2714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">
                  Lai Paih / Lai Wrestling
                </h3>

                <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  View
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="group relative block">
              <img
                src="https://images.unsplash.com/photo-1651078775644-9327712eb9d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">
                  Volleyball Events
                </h3>

                <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  View
                </span>
              </div>
            </a>
          </li>

          <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" class="group relative block">
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Soccer Events</h3>

                <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  View
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DashboardEvents;
