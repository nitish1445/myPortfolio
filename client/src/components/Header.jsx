import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiHome, FiAward, FiUser, FiTool } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa6";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  // Disable scroll when drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full">
        {/* Navbar */}
        <nav className="mx-4 md:mx-8 mt-4 rounded-full border border-white/10 bg-slate-900/70 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 md:px-10 py-3 lg:py-5">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-base font-bold text-slate-100 tracking-tight">
                Nitish Kumar
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-5 items-center">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Skills", "/skills"],
                ["Hackathons", "/hackathons"],
                ["Certificates", "/certificates"],
              ].map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg font-medium transition-all duration-200 text-slate-200 hover:text-cyan-400"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-xl text-slate-300 hover:text-cyan-400 flex items-center justify-center h-9 w-9 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </nav>

        {/* Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden" />
        )}

        {/* Mobile Drawer */}
        <div
          ref={drawerRef}
          className={`fixed right-0 top-0 h-full w-[65%] max-w-sm 
          bg-slate-900/90 backdrop-blur-xl border-l border-white/10
          text-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <span className="text-xl font-semibold text-slate-200">
              Navigate
            </span>

            <FaXmark
              className="w-6 h-6 cursor-pointer text-slate-300 hover:text-red-400 transition"
              onClick={() => setMobileOpen(false)}
            />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 px-6 py-6 text-lg">
            {[
              { name: "Home", path: "/", icon: <FiHome /> },
              { name: "About", path: "/about", icon: <FiUser /> },
              {
                name: "Projects",
                path: "/projects",
                icon: <FaRegFolder />,
              },
              { name: "Skills", path: "/skills", icon: <FiTool /> },
              {
                name: "Hackathons",
                path: "/hackathons",
                icon: <LuTrophy />,
              },
              {
                name: "Certificates",
                path: "/certificates",
                icon: <FiAward />,
              },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-lg font-medium transition-all duration-200 text-slate-200 hover:text-cyan-400"
              >
                <span className="text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
