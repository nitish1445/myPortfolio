import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImLinkedin2 } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" pt-45 text-center flex flex-col gap-5 h-screen">
        <div className="text-[90px] text-white text-center text-statisfy">
          <span>Hey , I am </span>
          <span>Nitish kumar</span>
        </div>
        <div className="text-white text-2xl">
          A Software Developer specializing in Full Stack Development.
        </div>
        <div className="flex gap-8 justify-center text-white">
          <button
            className="flex gap-3 items-center cursor-pointer hover:text-yellow-500"
            onClick={() => {
              navigate("/projects");
            }}
          >
            <FaArrowRight /> See My Projects
          </button>
          <button
            className="flex gap-3 items-center cursor-pointer hover:text-yellow-500"
            onClick={() => {
              navigate("/about");
            }}
          >
            <FaArrowRight /> More About Me
          </button>
        </div>
        <div className="flex gap-5 justify-center text-white pt-5">
          <a
            href="https://github.com/nitish1445"
            target="blank"
            className="bg-gray-200/20 p-3 text-2xl rounded-[50%] scale-100 duration-300 hover:scale-120 hover:duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://leetcode.com/u/nitish1445/"
            target="blank"
            className="bg-gray-200/20 p-3 text-2xl rounded-[50%] scale-100 duration-300 hover:scale-120 hover:duration-300"
          >
            <FaCode />
          </a>
          <a
            href="https://www.linkedin.com/in/nitish1445/"
            target="blank"
            className="bg-gray-200/20 p-3 text-2xl rounded-[50%] scale-100 duration-300 hover:scale-120 hover:duration-300"
          >
            <ImLinkedin2 />
          </a>
          <a
            href="mailto:sarainitsh@gmail.com"
            className="bg-gray-200/20 p-3 text-2xl rounded-[50%] scale-100 duration-300 hover:scale-120 hover:duration-300 "
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
