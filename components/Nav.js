"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Live", href: "/live" },
  { name: "Shop", href: "/shop" },
  { name: "Board", href: "/board" },
  // { name: "Contact", href: "/contact" },
  { name: "UC Cup", href: "/uc-cup" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // navbar color change when scrolling
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) setColorChange(true);
      else setColorChange(false);
    };

    window.addEventListener("scroll", changeNavbarColor);

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <header
      className={
        `z-40 fixed w-full ` +
        (colorChange
          ? " bg-gradient-to-r from-amber-900 to-gray-800 "
          : " bg-black bg-opacity-20 backdrop-blur-sm")
      }
    >
      <nav
        className="mx-auto flex max-w-full  p-3 lg:px-8 flex-col"
        aria-label="Global"
      >
        <div className="items-start justify-between flex w-full">
          {/* navigation for smaller screens */}
          <div className="flex flex-1">
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
          {/* logo */}
          <Link href="/" className="">
            <Image
              src={
                "https://storage.googleapis.com/uci-public/umaa/white-logo%403x.png"
              }
              className="h-auto w-48 md:w-64"
              alt="UMAA logo"
              width={256}
              height={64}
            />
          </Link>
          <div className="flex flex-1 justify-end text-white">
            <a
              href="https://donate.stripe.com/7sI9ChdkhcsF0PC3cc"
              className="text-sm font-semibold leading-6 "
            >
              <CurrencyDollarIcon className="w-6 h-6 " />
            </a>
            <Link
              href="/contact"
              className=" hidden md:text-sm ml-3 font-semibold leading-6 "
            >
              Contact
            </Link>
          </div>
        </div>
        {/* nav links for larger screens */}
        <div className="hidden lg:flex lg:gap-x-12 mx-auto pt-5">
          {navigation.map((item) =>
            item.name === "UC Cup" ? (
              <Link
                href="/uc-cup"
                key={item.name}
                className=" text-xs font-semibold leading-6 text-white bg-amber-800 px-2 hover:shadow-md hover:bg-black"
              >
                UC Cup
              </Link>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className=" text-xs font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden ease-in delay-200"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 w-1/4 overflow-y-auto z-50  bg-amber-800 px-6 py-6 backdrop-blur-sm bg-opacity-90">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block px-3 py-2 text-xs font-semibold leading-7 text-gray-100 hover:bg-yellow-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
