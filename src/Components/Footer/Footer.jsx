import React from "react";
import Logo from "../../assets/logo.png";
import { FaGithubSquare, FaMailBulk } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 text-base text-gray-200 font-semibold"
          >
            <div className="flex justify-center items-center">
              <img src={Logo} width={50} alt="Logo" />
            </div>
          </a>
          {/* Left Section: Copyright */}
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sasith Methmal. All rights
              reserved.
            </p>
          </div>

          {/* Middle Section: Social Media Links */}
          <div className="flex gap-0">
            <a
              type="button"
              href="https://www.linkedin.com/in/sasith-methmal/"
              target="_blank"
              className="text-white  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-white dark:hover:text-slate-500 dark:focus:ring-blue-800 dark:hover:bg-white"
            >
              <FaLinkedin className="w-6 h-6" />
              <span class="sr-only">Icon description</span>
            </a>
            <a
              type="button"
              href="https://github.com/sasithmj"
              target="_blank"
              className="text-white  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-white dark:hover:text-slate-500 dark:focus:ring-blue-800 dark:hover:bg-white"
            >
              <FaGithubSquare className="w-6 h-6" />
              <span class="sr-only">Icon description</span>
            </a>
            <a
              type="button"
              href="https://www.instagram.com/sasith_m_jayaweera/"
              target="_blank"
              className="text-white  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-white dark:hover:text-slate-500 dark:focus:ring-blue-800 dark:hover:bg-white"
            >
              <FaInstagram className="w-6 h-6" />
              <span class="sr-only">Icon description</span>
            </a>
            <a
              type="button"
              href="mailto:sasithmjayaweera@gmail.com"
              className="text-white  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-slate-500 dark:text-white dark:hover:text-slate-500 dark:focus:ring-blue-800 dark:hover:bg-white"
            >
              <FaMailBulk className="w-6 h-6" />
              <span class="sr-only">Icon description</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
