"use client";
import Image from "next/image";
import logoIcon from "../../logo.svg";
import Link from "next/link";
import { oswald } from "@/app/pages/_app";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useContext } from "react";
import Notification from "@/app/components/notification";

export default function NewUser() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError(true)
      setMsg("Password must be at least 6 characters.")
      return false;
    } else if (password !== passwordConfirm) {
      setError(true)
      setMsg("Passwords don't match.")
      return false;
    } else if (password === passwordConfirm) {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
          data: {
            first_name: fname,
            last_name: lname,
          }
        },
      })
      router.push('/login') // redirect to /signin
    }
  };
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
        {error
          ? <Notification msg={msg} />
          : null
        }
        <h2
          className={`mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 ${oswald.className}`}
        >
          Sign Up
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Already a member?{" "}
          <Link
            href="/login"
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
          <div className="pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
          <div className="mt-10 flex">
            <Link
              href="/"
              className="text-sm font-semibold leading-7 text-gray-700 ml-auto"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
