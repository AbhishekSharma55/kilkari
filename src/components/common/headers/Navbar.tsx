"use client";
import React from "react";
import { ThemeButton } from "../buttons/Theme-button";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const listItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/gallery", title: "Gallery" },
  { href: "/contact-us", title: "Contact us" },
];
const Navbar = () => {
  const router = useRouter()
  return (
    <div>
      <nav className="bg-background fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pr-0">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KILKARI
            </span>
          </a>
          <div className="flex md:order-2 rtl:space-x-reverse">
            <ThemeButton/>
            <div
              data-collapse-toggle="navbar-sticky"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t backdrop-blur-lg pt-1">
                <div className="grid grid-cols-4 mx-auto font-medium">
                  <button
                    type="button"
                    className="inline-flex flex-col items-center justify-center px-5 hover:dark:hover:group"
                    onClick={() => router.push("/")}
                  >
                    <svg
                      className="w-5 h-5 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9ca3af"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Home
                      
                    </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex flex-col items-center justify-center px-5 hover:dark:hover:group"
                    onClick={() => router.push("/gallery")}
                  >
                    <svg
                      className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9ca3af"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                      <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                   Gallery
                    </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex flex-col items-center justify-center px-5 hover:dark:hover:group"
                    onClick={() => router.push("/about")}
                  >
                    <svg
                      className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#9ca3af"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                      />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                      About
                    </span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex flex-col items-center justify-center px-5 hover:dark:hover:group"
                    onClick={() => router.push("/contact-us")}
                  >
                    <svg
                      className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9ca3af"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                    Contact Us

                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {listItems.map((Item) => {
                return (
                  <li key={Item.title}>
                    <Link
                      href={Item.href}
                      className="block py-2 px-3 rounded text-foreground hover:text-primary transition-all duration-500"
                      aria-current="page"
                    >
                      {Item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
