'use client'
import Link from "next/link";
import { oswald } from "../pages/_app";

export default function BoardLogin() {
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img
              className="mx-auto h-10 w-auto text-center"
              src="https://storage.googleapis.com/uci-public/Branding/icon%20only/white%20icon/3x/UCI%20white%20icon%403x.png"
              alt="United Chin International Ltd"
            />
            <h2
              className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ${oswald.className}`}
            >
              Board Member Portal
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative -space-y-px  shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10  ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-950 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-950 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-gray-200 hover:text-gray-900"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="text-center text-sm leading-6 text-white ">Or</div>

          <div className="w-auto flex flex-col items-center justify-center">
            <Link href="/signup" className="mb-5 w-1/2">
              <button className="flex w-full justify-center bg-stone-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">
                Sign Up
              </button>
            </Link>
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>

            <script async src="https://js.stripe.com/v3/buy-button.js"></script>

            <stripe-buy-button
              buy-button-id="buy_btn_1O2gajAkvwHnCGKIrk2sKWOa"
              publishable-key="pk_live_51NzC35AkvwHnCGKIPiIwJhBZZ9jL5QtpAE8UCjJXY74tnz26BeGQddkjSZbSTw9FcE6ZtAT5A8CF35UljCbkdVfw006qJjDcCA"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
    </>
  );
}
