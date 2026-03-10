import React from "react";

const certificates = [
  {
    title: "Web Development Bootcamp",
    org: "Udemy",
    year: "2024",
  },
  {
    title: "React Developer Certification",
    org: "Coursera",
    year: "2025",
  },
];

const Certificates = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-16 pt-32 text-white  md:px-12">
        <div className="pointer-events-none absolute -top-20 left-[-12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-14%] right-[-8%] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Certificates
          </h1>

          <p className="text-slate-400 mt-4">
            Certifications and courses I have completed.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {cert.title}
              </h3>

              <p className="text-slate-300 mt-2">{cert.org}</p>

              <p className="text-slate-400 text-sm mt-1">{cert.year}</p>
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

export default Certificates;
