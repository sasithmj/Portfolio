import React from "react";
import DP from "../../assets/dp2.jpg";
import TechStach from "./TechStach";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare, FaMailBulk } from "react-icons/fa";
import NamedComponent from "./NameComponent";

function Hero() {
  return (
    <div className="w-full h-screen mt-16 bg-[#0f172a] bg-opacity-98 flex items-center justify-center text-white">
      <div className="absolute top-16 inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-80 min-h-screen"></div>
      <div className="w-full min-h-screen top-[12vh] text-white relative overflow-hidden flex items-center justify-center lg:-top-10">
        <div className="container max-w-6xl px-4 flex flex-col justify-center">
          {" "}
          {/* Added flex and justify-center */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-200px)]">
            {" "}
            {/* Added min-height */}
            {/* Left Content */}
            <div className="z-10 flex justify-center">
              {" "}
              {/* Added flex and items-center */}
              <div className="space-y-4 flex flex-col items-center lg:block ">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Hello
                  <span className="text-coral-500 inline-block animate-blink">
                    .
                  </span>
                </h1>
                {/* <p className="text-2xl lg:text-3xl text-gray-300">I'm Sasith</p> */}
                <NamedComponent />
                <h2 className="text-4xl lg:text-5xl font-bold mt-2">
                  Software Developer
                </h2>
                <div className="flex gap-4 mt-8">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      Got a project?
                    </span>
                  </button>
                  <a
                    type="button"
                    href="./Sasith Methmal's Resume_InternSE.pdf"
                    download={true}
                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    My Resume
                  </a>
                </div>
                <div className="flex gap-0 mt-8">
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
            {/* Right Content - Profile Image */}
            <div className="relative">
              <div class="mx-auto flex w-full max-w-lg items-center justify-center">
                <div class="w-90 h-90 relative z-10 flex cursor-pointer items-center overflow-hidden rounded-full border border-slate-800 p-[2px]">
                  <div class="w-80 h-80 animate-rotate absolute inset-0 rounded-full bg-[conic-gradient(#FF6B6B_20deg,transparent_120deg)]"></div>
                  <div class="relative z-20 flex w-80 h-80 rounded-full bg-slate-900 p-2">
                    <img
                      src={DP}
                      alt="Profile"
                      className="relative z-10 w-full h-full object-cover rounded-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TechStach />
        </div>
      </div>
    </div>
  );
}

export default Hero;
