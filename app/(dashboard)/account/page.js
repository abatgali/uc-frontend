import dynamic from "next/dynamic";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs/dist";
import { cookies } from "next/headers";
import apiClient from "../../../libs/api";
import Image from "next/image";
const ButtonWithHandler = dynamic(
  () => import("../../components/ButtonWithHandler"),
  {
    ssr: false, // This line is important. It disables server-side render for this component.
  },
);

export default async function Dashboard() {
  const supabase = createClientComponentClient({ cookies });

  return (
    <>
      <div className="min-h-full w-full flex">
        <div className=" float-left flex h-screen flex-col justify-between border-e w-[200px] bg-white backdrop-blur-sm bg-opacity-30 ">
          <div className="px-4 py-6">
            {/* <div className="w-6 flex gap-1 flex-col ml-2">
              <div className="bg-gray-500 w-full h-1"></div>
              <div className="bg-gray-500 w-full h-1"></div>
              <div className="bg-gray-500 w-full h-1"></div>
            </div> */}
            <Image
          src="https://storage.googleapis.com/uci-public/Branding/icon%20only/white%20icon/3x/UCI%20white%20icon%403x.png"
          alt="UMAA - United Myanmar American Association Logo"
          width={48}
          height={48}
          className="mx-auto mb-5"
        />
            {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-transparent text-xs text-gray-600">
              <image src="../public/logo.svg" alt="logo" />
            </span> */}

            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href=""
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  General
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Events </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Members
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Account </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        href=""
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Details
                      </a>
                    </li>

                    <li>
                      <ButtonWithHandler />
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
            >
              {/* <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              /> */}

              <div>
                <p className="text-xs">
                  {/* <strong className="block font-medium"></strong> */}

                  <span> </span>
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full p-16">
          <h1>Hello, user!</h1>
          <hr />
          <p className="mt-10">
            This is a private page. You can only access it if you are logged in.
          </p>
          <a
            className="w-fit mt-6 inline-flex items-center gap-2 rounded border border-gray-700 bg-black px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-white"
            href="/"
          >
            <span className="text-sm font-medium"> Back to Home </span>

            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
