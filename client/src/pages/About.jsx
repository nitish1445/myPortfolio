import React from "react";
import { TbSchool } from "react-icons/tb";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import { FaRegHeart, FaDownload } from "react-icons/fa6";
import resume from "../assets/resume/resume.pdf";

const About = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white md:px-12">
        {/* Background Glow */}

        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[28%] left-[38%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="mx-auto max-w-6xl">
          {/* Hero */}

          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-relaxed">
              I am Nitish Kumar, passionate about turning ideas into
              applications. Here is a glimpse of who I am, what I love, and
              where I am headed
            </p>

            {/* Resume Button */}

            <a
              href={resume}
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 text-center">
            <div className="bg-slate-900/60 border border-cyan-400/10 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-cyan-300">5+</h3>
              <p className="text-slate-400 text-sm">Projects Built</p>
            </div>

            <div className="bg-slate-900/60 border border-cyan-400/10 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-cyan-300">100+</h3>
              <p className="text-slate-400 text-sm">DSA Problems</p>
            </div>

            <div className="bg-slate-900/60 border border-cyan-400/10 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-cyan-300">4</h3>
              <p className="text-slate-400 text-sm">Tech Stacks</p>
            </div>

            <div className="bg-slate-900/60 border border-cyan-400/10 rounded-xl p-5">
              <h3 className="text-3xl font-bold text-cyan-300">2027</h3>
              <p className="text-slate-400 text-sm">Graduate</p>
            </div>
          </div>

          {/* Cards */}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Education */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-lg">
              <div className="pt-1 text-2xl text-cyan-300">
                <TbSchool />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Education
                </h3>
                <p className="mt-2 text-slate-300">
                  <span className="text-cyan-300 font-medium">
                    IES College of Technology
                  </span>{" "}
                  – B.Tech (ECE), CGPA 7.3
                </p>
                <p className="text-slate-300">CBSE: 12th – 67%, 10th – 81%</p>
              </div>
            </div>

            {/* Passion */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-lg">
              <div className="pt-1 text-2xl text-cyan-300">
                <FiBookOpen />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Passion
                </h3>
                <p className="mt-2 text-slate-300">
                  I enjoy building full-stack applications and writing clean,
                  scalable code that solves real problems.
                </p>
              </div>
            </div>

            {/* Interests */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-lg">
              <div className="pt-1 text-2xl text-cyan-300">
                <AiOutlineRise />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Interests
                </h3>
                <p className="mt-2 text-slate-300">
                  Backend systems, scalable APIs, clean UI design, and improving
                  problem-solving through DSA.
                </p>
              </div>
            </div>

            {/* Hobbies */}

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-lg">
              <div className="pt-1 text-2xl text-cyan-300">
                <FaRegHeart />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Hobbies
                </h3>
                <p className="mt-2 text-slate-300">
                  Playing cricket, listening to music, and having meaningful
                  discussions about technology and ideas.
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
        <div className="text-slate-300 text-sm tracking-wide">
          © 2026 Nitish Kumar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default About;
