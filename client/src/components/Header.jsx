import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/nk-transparent-logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div>Home</div>
      <div>About</div>
      <div>Home  Skills Projects Experience Contact</div> */}
      <div class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl bg-blue-200/20 backdrop-blur-lg rounded-full shadow-md border border-white/10 flex justify-between items-center py-2 px-5">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="" className="w-15 h-15" />
        </div>
        <div className="flex gap-4 text-white ">
          <Link to={"/"} className="hover:text-yellow-500">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-yellow-500">
            About
          </Link>
          {/* experiences */}
          <Link to={"/projects"} className="hover:text-yellow-500">
            Projects
          </Link>
          <Link to={"/hackathons"} className="hover:text-yellow-500">
            Hackathons
          </Link>
          <Link to={"/certificates"} className="hover:text-yellow-500">
            Certificates
          </Link>
          <Link to={"/"} className="hover:text-yellow-500"></Link>
        </div>
      </div>
    </>
    // More About me   keep it at bootom of home
  );
};

export default Header;
