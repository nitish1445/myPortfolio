import React from "react";

const skills = [
  {
    title: "Languages",
    items: ["Java", "Javascript", "C++"],
  },
  {
    title: "Web & Backend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "REST API",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Linux", "Vercel"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structure & Algorithms", "OOPs", "REST Architecture"],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Communication",
      "Time Management",
      "Adaptability",
      "Team Collaboration",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white  md:px-12">
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[28%] left-[38%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
            Skills
          </h1>

          <p className="text-slate-400 mt-4">
            A showcase of my technical skills and the technologies I work in.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-slate-800 text-cyan-300 border border-transparent transition duration-300 hover:border-indigo-400 hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

export default Skills;
