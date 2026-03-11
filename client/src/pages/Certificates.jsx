import React, { useState } from "react";

const certificates = [
  {
    title: "Cloud Computing",
    org: "NPTEL",
    year: "May 2025",
    link: "https://drive.google.com/drive/folders/1yamNO5a1ZDvOyuiRyNK6RutcMSOmAQEE?usp=sharing",
    note: "Completed NPTEL course covering cloud architecture, virtualization, distributed systems, and cloud service models.",
  },
  {
    title: "Programming in Java (Silver)",
    org: "NPTEL",
    year: "Nov 2025",
    link: "https://drive.google.com/drive/folders/1yamNO5a1ZDvOyuiRyNK6RutcMSOmAQEE?usp=sharing",
    note: "Achieved Silver certification demonstrating strong understanding of Java fundamentals, OOP concepts, and problem solving.",
  },
  {
    title: "Internet of Things",
    org: "NPTEL",
    year: "Nov 2024",
    link: "https://drive.google.com/drive/folders/1yamNO5a1ZDvOyuiRyNK6RutcMSOmAQEE?usp=sharing",
    note: "Learned IoT architecture, sensors, embedded communication, and real-world connected device applications.",
  },
  {
    title: "Meshmerize Robo Competition",
    org: "Techfest IIT Bombay (Bhopal Zone)",
    year: "2025",
    link: "https://drive.google.com/drive/folders/1yamNO5a1ZDvOyuiRyNK6RutcMSOmAQEE?usp=sharing",
    note: "Secured 3rd place in the Meshmerize robotics competition demonstrating teamwork, problem-solving, and technical implementation.",
  },
];

const Certificates = () => {
  const [openList, setOpenList] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white md:px-12">
        {/* Background Glow */}

        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-[28%] left-[38%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Hero */}

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className=" font-bold leading-tight ">
              <span className="text-3xl sm:text-4xl md:text-5xl bg-linear-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                Certificates
              </span>

              <span className="block mt-3 text-slate-100 text-xl sm:text-2xl md:text-3xl">
                Built Through Consistent Practice
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
              Certifications and guided learning helped me sharpen my web
              development foundation, improve my React workflow, and build more
              production-ready projects with confidence.
            </p>

            <button
              onClick={() => setOpenList(true)}
              className="mt-8 rounded-full bg-cyan-300 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-200 cursor-pointer"
            >
              View My Certificates
            </button>
          </div>
        </div>
      </section>

      {/* CERTIFICATE LIST MODAL */}

      {openList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur px-5">
          <div className="bg-slate-900 border border-white/10 rounded-2xl px-3 py-4 w-full max-w-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-cyan-400">
                My Certificates
              </h2>

              <button
                onClick={() => setOpenList(false)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border border-white/10 rounded-xl p-4 hover:border-cyan-400 transition"
                >
                  <div>
                    <p className="text-slate-100 font-medium">{cert.title}</p>

                    <p className="text-sm text-slate-400">
                      {cert.org} • {cert.year}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="px-4 py-1 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition cursor-pointer"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATE VIEW MODAL */}

      {selectedCert && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="relative w-[90%] max-w-3xl bg-slate-900 border border-white/10 rounded-2xl p-4">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>

            <iframe
              src={selectedCert.link}
              title={selectedCert.title}
              className="w-full h-125 rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}

      <div className="flex justify-center items-center py-2 bg-slate-900/70 backdrop-blur-xl">
        <div className="text-slate-300 text-sm tracking-wide">
          © 2026 Nitish Kumar. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Certificates;
