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
    date: "Feb 2026",
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
  {
    title: "Photo Editor",
    // img: image1,
    date: "Dec 2025",
    desc: "A basic photo editor tool.",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript"],
    github:
      "https://github.com/nitish1445/RICR-Web-Development/tree/main/JavaScript/imageEditor",
    live: "#",
  },
  {
    title: "Weather App",
    // img: ,
    date: "Dec 2025",
    desc: "Live weather update of given location",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript"],
    github:
      "https://github.com/nitish1445/RICR-Web-Development/tree/main/weatherApp",
    live: "#",
  },
];

const Projects = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white  md:px-12">
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Projects
          </h1>

          <p className="text-slate-400 mt-4">
            A few highlights of the projects I've built or contributed in.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-cyan-500/20 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-10 hover:border-cyan-400 transition"
            >
              {/* Image */}
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <img
                  src={project.img}
                  alt={project.title}
                  className="max-w-sm w-full h-full md:h-55 rounded"
                />
              </div>

              {/* Text */}
              <div className="flex-1 order-2 md:order-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-cyan-400">
                    {project.title}
                  </h2>

                  <p className="text-slate-400 text-sm">{project.date}</p>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-md bg-slate-800 text-cyan-300 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    >
                      View Code →
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      className="px-5 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                    >
                      View Live
                    </a>
                  </div>
                </div>
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
        <div className="text-slate-300 text-sm md:text-base tracking-wide">
          © 2026 Nitish Kumar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Projects;
