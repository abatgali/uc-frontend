import Image from "next/image";
import logoIcon from "../../logo.svg";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 h-full">
      <div>
        <Image
          src={logoIcon}
          className="w-6 h-6 mt-20"
          alt="United Chin International - UC Cup logo"
        />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Not a member?{" "}
          <Link
            href="/signup"
            className="font-semibold text-amber-600 hover:text-orange-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <div className="mt-10 mb-10">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-orange-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-amber-600 hover:text-orange-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center p-5">
          <p className="mb-4 text-sm">Or</p>
          <div>
            <Link href="/signup">
              <button
                type=""
                className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex">
          <Link
            href="/"
            className="text-sm font-semibold leading-7 text-gray-700"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
