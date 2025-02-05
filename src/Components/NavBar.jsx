import React from "react";
import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="z-20 fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-full  px-4 py-2 mx-auto text-white bg-slate-900 shadow-md rounded-md lg:px-8 lg:py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-base text-gray-200 font-semibold"
        >
          <div className="flex justify-center items-center">
            <img src={Logo} width={50} alt="Logo" />
            <span className="px-4">Sasith Methmal</span>
          </div>
        </a>
        <div className="hidden sm:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 sm:flex-row sm:items-center sm:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#About" className="flex items-center hover:text-slate-400">
                About
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#Services" className="flex items-center hover:text-slate-400">
                Services
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#" className="flex items-center hover:text-slate-400">
                Work
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
              <a href="#" className="flex items-center hover:text-slate-400">
                Resume
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 border rounded-3xl px-3 hover:bg-slate-50 hover:text-slate-900">
              <a href="#Contact" className="flex items-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
