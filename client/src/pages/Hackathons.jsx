import React from "react";
import hackathonNk from "../assets/hackathons/hackathonNk.jpeg";

const hackathons = [
  {
    title: "NavKalpna Hackathon",
    image: hackathonNk,
    location: "Bhopal, Madhya Pradesh",
    date: "2026",
    position: "Top 8 Finalist",
    desc: "Built HealthUp FitAI, an AI-powered fitness intelligence platform that provides personalized workout plans, diet recommendations, habit tracking, and AI coaching.",
    achievement:
      "Selected among the Top 8 teams out of 60+ participants and given the opportunity to further develop the product for real-world implementation.",
  },
];

const Hackathons = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-36 text-white md:px-12">
        
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[30%] left-[40%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Hero */}
        <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-8">
          {/* Heading */}

          <h1 className=" font-bold leading-tight ">
            <span className="text-3xl sm:text-4xl md:text-5xl bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Hackathons
            </span>

            <span className="block mt-3 text-slate-100 text-xl sm:text-2xl md:text-3xl">
              Where Ideas Became Products
            </span>
          </h1>

          {/* Description */}

          <p className="max-w-4xl text-sm md:text-base text-slate-400 leading-relaxed px-1">
            I enjoy fast-paced problem solving, collaborating with teams, and
            building real-world MVPs under tight deadlines. Hackathons helped me
            improve product thinking, architecture decisions, and rapid
            development skills.
          </p>

          {/* Stats */}

          <div className="mt-4 grid grid-cols-2 gap-5">
            <div className="group rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400">
              <p className="text-2xl md:text-3xl font-bold text-cyan-300">2+</p>

              <p className="text-xs text-slate-400 mt-1">Hackathons Joined</p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400">
              <p className="text-2xl md:text-3xl font-bold text-emerald-300">
                MERN
              </p>

              <p className="text-xs text-slate-400 mt-1">Tech Stack</p>
            </div>
          </div>
        </div>

        {/* Events */}

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
              Featured Events
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-100 sm:text-3xl">
              Projects Built Under Pressure
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            {hackathons.map((hackathon, index) => (
              <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-linear-to-r from-slate-900/70 via-slate-900/50 to-slate-900/70 p-6 backdrop-blur">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* LEFT IMAGE */}

                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-80 object-cover rounded-2xl transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* RIGHT CONTENT */}

                  <div className="space-y-4">
                    {/* Position */}

                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
                      {hackathon.position}
                    </h2>

                    {/* Title */}

                    <h3 className="text-xl font-semibold text-slate-100">
                      {hackathon.title}
                    </h3>

                    {/* Location */}

                    <p className="text-sm text-slate-300">
                      {hackathon.location}
                    </p>

                    {/* Date */}

                    <p className="text-sm text-slate-400 italic">
                      {hackathon.date}
                    </p>

                    {/* Points */}

                    <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full text-green-400 text-2xl">
                          •
                        </span>
                        <span>{hackathon.desc}</span>
                      </li>

                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full text-green-400 text-2xl">
                          •
                        </span>
                        <span>{hackathon.achievement}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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

export default Hackathons;
