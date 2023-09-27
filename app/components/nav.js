"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SocialMediaBanner from "./socialmediaTopBanner";
import Logo from "./logo";
import Image from "next/image";
import logoIcon from "../logo.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Live", href: "/live" },
  { name: "Shop", href: "/shop" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r  from-blue-950 to-blue-300">
      <nav
        className="mx-auto flex max-w-full items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link href="/" className="-m-1.5 p-1.5 flex items-center">
          <Image
            src={logoIcon}
            className="w-8 h-8 mr-4 "
            alt="United Chin International - UC Cup logo"
          />
          <div className="">
            <Logo />
          </div>
        </Link>
        <div className="flex flex-1 justify-end text-white">
          <Link href="/login" className="text-sm font-semibold leading-6 ">
            <UserIcon className="w-6 h-6 mr-3" />
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 ">
            Contact
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden ease-in delay-200"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 w-2/5 overflow-y-auto  bg-gradient-to-r from-blue-900 to-sky-300 px-6 py-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
      <SocialMediaBanner />
    </header>
  );
}
