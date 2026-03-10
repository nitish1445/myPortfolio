import React from "react";
import { TbSchool } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white  md:px-12">
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          {/* Hero section */}
          <div className="text-center md:p-12">
            <h1 className="text-4xl font-bold text-cyan-300 sm:text-5xl md:text-6xl">
              About Me
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              I am Nitish, passionate about turning ideas into applications.
              Here is a glimpse of who I am, what I love, and where I am headed.
            </p>
          </div>

          {/* Education */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70">
              <div className="pt-1 text-2xl text-cyan-300">
                <TbSchool />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Education
                </h3>
                <p className="mt-2 text-slate-300">
                  <span className="font-medium text-cyan-300">
                    IES College of Technology
                  </span>
                  - B.Tech, CGPA 7.3.
                </p>
                <p className="text-slate-300">
                  Scored 67% in class 12 and 81% in class 10 CBSE.
                </p>
              </div>
            </div>

            {/* Passion */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70">
              <div className="pt-1 text-2xl text-cyan-300">
                <FiBookOpen />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Passion
                </h3>
                <p className="mt-2 text-slate-300">
                  I love turning ideas into practical products and writing code
                  that is easy to read, scale, and maintain.
                </p>
              </div>
            </div>

            {/* Intrest */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70">
              <div className="pt-1 text-2xl text-cyan-300">
                <AiOutlineRise />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Interests
                </h3>
                <p className="mt-2 text-slate-300">
                  I am interested in backend architecture, clean UI design, and
                  improving problem-solving through regular DSA practice.
                </p>
              </div>
            </div>

            {/* Hobbies */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70">
              <div className="pt-1 text-2xl text-cyan-300">
                <FaRegHeart />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Hobbies
                </h3>
                <p className="mt-2 text-slate-300">
                  I enjoy cricket, meaningful conversations, and listening to
                  music when I am not coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Notes */}
      <div
        className="flex justify-center items-center py-2
        bg-slate-900/70 backdrop-blur-xl "
      >
        <div className="text-slate-300 text-sm md:text-base tracking-wide">
          © 2026 Nitish Kumar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default About;
