"use client";

import Image from "next/image";
import logoIcon from "../../logo.svg";
import Link from "next/link";
import { oswald } from "../../pages/_app";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SignIn({ supabaseClient, initialSession }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const supabase = createClientComponentClient();

  async function handleSignIn() {
    try {
      if (supabase && supabase.auth) {
        await supabase.auth.signInWithPassword({
          email,
          password,
        });
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 h-full">
      <div>
        <Link href="/">
          <Image
            src={logoIcon}
            className="w-6 h-6"
            alt="United Chin International - UC Cup logo"
          />
        </Link>
        <h2
          className={`mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 ${oswald.className}`}
        >
          Sign in to your account
        </h2>
        {error && <p className="text-red-500">{error}</p>}
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
        <form onSubmit={handleSignIn} className="space-y-6" method="POST">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

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
              className="flex w-full justify-center  bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center p-5">
          <p className="mb-2 text-sm">Or</p>
          <div>
            <Link href="/signup">
              <button
                type=""
                className="flex w-full justify-center bg-yellow-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex ">
          <Link
            href="/"
            className="text-sm font-semibold leading-7 text-gray-700 ml-auto"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
