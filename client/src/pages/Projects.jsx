import React from "react";
import image from "../assets/craveit.jpg";
import image1 from "../assets/chatus.jpg";
import { FiGithub } from "react-icons/fi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="pt-35 mb-20 text-white h-screen">
        {/* Header */}

        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-bold text-teal-600 shadow-md ">
            Projects
          </h1>
          <div className="px-80 text-[15px] text-gray-200 ">
            A few highlights of the projects I've built or contributed to.
          </div>
        </div>

        <div className="flex gap-5 px-40 py-5">
          {/* Crave it */}
          <button className="text-2xl cursor-pointer">
            <IoIosArrowDropleftCircle />
          </button>
          <div className="p-5 w-70 bg-gray-200/10 rounded-[18px]">
            {/* photo */}

            <img src={image} alt="" className="w-65 h-40 rounded-lg" />

            {/* project name */}

            <h3 className="text-xl font-medium py-3">CraveIt</h3>

            {/* description */}

            <div className="text-[14px] pb-2">
              A seamless food ordering platform with secure authentication, cart
              system, real time tracking and resturant admin managment.
            </div>

            {/* libraries */}

            <div className="space-y-2 py-2 text-xs">
              <div className="space-x-1">
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  React
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Node.js
                </span>

                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  MongoDB
                </span>
              </div>
              <div className="space-x-1">
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Express
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  TailwindCSS
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Cloudnary
                </span>
              </div>
            </div>

            {/* button  */}

            <div className="flex gap-5 justify-start items-center text-xs pt-2">
              <div className="flex gap-1 items-center text-red-400 cursor-pointer">
                <FiGithub />

                <a
                  href="https://github.com/nitish1445/RICR-Web-Development/tree/main/CreaveIt"
                  target="blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
              <div className="flex gap-1 items-center text-violet-300 cursor-pointer">
                <BsBoxArrowUpRight />
                <a href="#" target="blank" className="hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* chatus */}

          <div className="p-5 w-70 bg-gray-200/10 rounded-[18px]">
            {/* photo */}

            <img src={image1} alt="" className="w-65 h-40 rounded-lg" />

            {/* project name */}

            <h3 className="text-xl font-medium py-3">ChatUP</h3>

            {/* description */}

            <div className="text-[14px] pb-2">
              A real-time chatting application enabling seamless user
              communication with responsive UI and secure message handling.
            </div>

            {/* libraries */}

            <div className="space-y-2 py-2 text-xs">
              <div className="space-x-1">
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  React
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Node.js
                </span>

                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  MongoDB
                </span>
              </div>
              <div className="space-x-1">
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Express
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  TailwindCSS
                </span>
                <span className="bg-red-300/40 px-2 py-0.5 rounded-2xl text-red-300">
                  Cloudnary
                </span>
              </div>
            </div>

            {/* button  */}

            <div className="flex gap-5 justify-start items-center text-xs pt-2">
              <div className="flex gap-1 items-center text-red-400 cursor-pointer">
                <FiGithub />
                <a href="#" target="blank" className="hover:underline">
                  Github
                </a>
              </div>
              <div className="flex gap-1 items-center text-violet-300 cursor-pointer">
                <BsBoxArrowUpRight />
                <a href="#" target="blank" className="hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <button className="text-2xl cursor-pointer">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
