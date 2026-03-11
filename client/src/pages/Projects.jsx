import React from "react";
import image from "../assets/projects/healthup.png";
import image1 from "../assets/projects/craveit.png";
import image2 from "../assets/projects/converse.png";

const projects = [
  {
    title: "HealthUp",
    img: image,
    date: "Feb 2026",
    desc: "An AI-powered adaptive fitness intelligence platform designed to provide personalized workout plans, diet recommendations, habit tracking, and AI coaching.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/Rakhiraj1686/NavKalpana-RICR-NK-0029",
    live: "https://healthup-ai.netlify.app/",
  },
  {
    title: "CraveIt",
    img: image1,
    date: "Jan 2026",
    desc: "A seamless food ordering platform with authentication, cart system, real-time tracking and admin management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github:
      "https://github.com/nitish1445/RICR-Web-Development/tree/main/CreaveIt",
    live: "#",
  },
  {
    title: "Converse",
    img: image2,
    date: "Mar 2026",
    desc: "Real-time chat application with secure messaging, responsive UI and fast socket communication.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Express",
      "JWT",
      "REST API",
      "FlyconUI",
    ],
    github: "https://github.com/nitish1445/chat-app",
    live: "#",
  },
];

const Projects = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white  md:px-12">
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[28%] left-[38%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
            Projects
          </h1>

          <p className="text-slate-400 mt-4">
            Some of the applications I've built and contributed while learning
            and exploring full-stack development.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-cyan-400/10 bg-slate-900/60 backdrop-blur overflow-hidden hover:border-cyan-400/50 transition duration-300"
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-cyan-300">
                    {project.title}
                  </h3>

                  <span className="text-xs text-slate-400">{project.date}</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-slate-800 border border-cyan-400/20 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                  >
                    View Code →
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                  >
                    View Live →
                  </a>
                </div>
              </div>

              {/* Featured Tag */}

              {project.featured && (
                <div className="absolute top-3 left-3 bg-cyan-400 text-black text-xs px-2 py-1 rounded">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-10">
          More projects coming soon...
        </p>
      </section>

      {/* Footer Notes */}

      <div
        className="flex justify-center items-center py-2
        bg-slate-900/70 backdrop-blur-xl "
      >
        <div className="text-slate-300 text-sm  tracking-wide">
          © 2026 Nitish Kumar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Projects;
