"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ContactUs() {
  return (
    <>
      <div className="isolate bg-gradient-to-b from-black to-slate-300 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl pt-24">
            Contact Organizers
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Reach out to our dedicated team of UC Cup organizers for
            event-related inquiries, registration assistance, and any other
            questions you may have.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-400"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-400"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-400"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-400"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
                  >
                    <option>US</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-900"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-400"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Get in touch
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Feel free to get in touch with us through the provided contact
                  form or connect with us on social media to stay updated on UC
                  Cup news and updates.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Collaborate
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-amber-600"
                          href="mailto:collaborate@example.com"
                        >
                          collaborate@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-2345</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Press
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-amber-600"
                          href="mailto:press@example.com"
                        >
                          press@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-3456</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Join our team
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-amber-600"
                          href="mailto:careers@example.com"
                        >
                          careers@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-4567</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Say hello
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-amber-600"
                          href="mailto:hello@example.com"
                        >
                          hello@example.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+1 (555) 905-5678</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Locations
                </h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Discover the venues where UC Cup events take place, ensuring
                  you're well-prepared and informed for your upcoming sports
                  experience
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Indianapolis
                  </h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>4556 Brendan Ferry</p>
                    <p>Indianapolis, IN 46227</p>
                  </address>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Greenwood
                  </h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>886 Walter Street</p>
                    <p>Greenwood, IN 12345</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team /> */}
    </>
  );
}
