import React from "react";
import { TbSchool } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="pt-35 pb-2 text-white h-screen">
        {/* Header */}

        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-bold text-teal-600 shadow-md ">
            About Me
          </h1>
          <p className="px-80 text-[15px] text-gray-200 ">
            I'm Nitish Kumar - passionate about turning ideas into beautiful,
            useful software. Here's a glimpse of who I am, what I love, and
            where I'm headed.
          </p>
        </div>

        {/*Box  */}

        <div className="grid grid-cols-2 gap-10 mt-10 px-40">
          <div className="flex gap-5 p-5 rounded-2xl bg-gray-100/10 scale-100 duration-500 hover:scale-105 hover:duration-500 w-125">
            <div className="text-2xl text-red-400 py-1">
              <TbSchool />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">Education</h3>
              <div className="text-gray-300">
                <p>
                  <span className="text-red-400">
                    IES College of Technology
                  </span>
                  - B.Tech, CGPA 7.3
                </p>
                <p>I got 67% in 12th and 81% in my 10th CBSE Board.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-2xl bg-gray-100/10 scale-100 duration-500 hover:scale-105 hover:duration-500 w-125">
            <div className="text-2xl text-red-400 py-1">
              <FiBookOpen />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">Passion</h3>
              <div className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto laudantium, culpa reiciendis obcaecati alias .
              </div>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-2xl bg-gray-100/10 max-w-fit scale-100 duration-500 hover:scale-105 hover:duration-500 w-125">
            <div className="text-2xl text-red-400 py-1">
              <AiOutlineRise />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">Intrest</h3>
              <div className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deleniti, deserunt te.
              </div>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-2xl bg-gray-100/10 max-w-fit scale-100 duration-500 hover:scale-105 hover:duration-500 w-125">
            <div className="text-2xl text-red-400 py-1">
              <FaRegHeart />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium">Hobbies</h3>
              <div className="text-gray-300">
                Love to watch cricket, discussing about politics, listening
                music.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
