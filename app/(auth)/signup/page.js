"use client";

import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const supabase = createClientComponentClient();
  const redirectURL = window.location.origin + "/api/auth/callback";

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      if (fname === "" || lname === "") {
        toast.error("Please enter your full name.");
      } else if (email === "") {
        toast.error("Please enter your email address.");
      } else if (password.length < 8 || password.length > 15) {
        toast.error(
          "Password must be at least 8 characters or not more than 15 characters."
        );
      } else if (password !== passwordConfirm) {
        toast.error("Passwords don't match.");
      } else if (password === passwordConfirm) {
        await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectURL,
            data: {
              full_name: fname + " " + lname,
            },
          },
        });
        toast.success("Account created!");
        setIsDisabled(true);
      }
    } catch (error) {
      toast.error(
        `Something went wrong, please try again later. (${error.message}) `
      );
    } finally {
      setPassword("");
      setPasswordConfirm("");
      setfName("");
      setlName("");
      setEmail("");
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 h-full">
      <div>
        <h2
          className={`mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center sm:text-3xl sm:leading-10`}
        >
          Sign Up
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Already a member?{" "}
          <Link
            href="/signin"
            className="font-semibold text-amber-600 hover:text-orange-500"
          >
            Sign In
          </Link>
        </p>
      </div>
      <div className="mt-5 mb-10">
        <form method="POST" className="space-y-6">
          <div className="flex justify-between space-x-2">
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={(e) => setfName(e.target.value)}
                  type="text"
                  required
                  className="block w-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  value={lname}
                  onChange={(e) => setlName(e.target.value)}
                  type="text"
                  required
                  className="block w-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="block w-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                value={passwordConfirm}
                id="passwordConfirm"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                name="passwordConfirm"
                type="password"
                required
                className="block w-full  border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <Link href="/tos" className="text-gray-700 underline">
                terms and conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-gray-700 underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading || isDisabled}
              className="flex w-full justify-center bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading && (
                <span className="loading loading-spinner loading-xs"></span>
              )}
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mb-4">
        <Link href="/" className="btn btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </Link>
      </div>
    </div>
  );
}
