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
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="max-w-4xl text-center flex flex-col items-center gap-8">
        {/* Heading */}
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-4 font-['Zeyada']">
          <span className="text-slate-300 text-3xl font-bold sm:text-5xl md:text-7xl">
            Hey, I'm
          </span>

          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent text-4xl font-bold sm:text-6xl md:text-8xl px-2">
            NITISH KUMAR
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-xl font-bold text-slate-300 font-['Zeyada']">
          I am a Software Developer specializing in full stack development.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 rounded-full bg-cyan-300 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 cursor-pointer font-['Zeyada']"
          >
            See My Projects <FaArrowRight />
          </button>

          <button
            onClick={() => navigate("/about")}
            className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-8 py-3 font-semibold text-slate-200 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300 cursor-pointer font-['Zeyada']"
          >
            More About Me <FaArrowRight />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 pt-2">
          <a
            href="https://github.com/nitish1445"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-800/70 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-300"
          >
            <FiGithub />
          </a>

          <a
            href="https://leetcode.com/u/nitish1445/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-800/70 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-400"
          >
            <FaCode />
          </a>

          <a
            href="https://www.linkedin.com/in/nitish1445/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-800/70 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
          >
            <ImLinkedin2 />
          </a>

          <a
            href="mailto:sarainitsh@gmail.com"
            className="rounded-full border border-slate-700 bg-slate-800/70 p-3 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-red-400 hover:text-red-400"
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
