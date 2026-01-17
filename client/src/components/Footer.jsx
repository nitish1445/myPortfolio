import React from "react";
import { FaRegCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="sticky bottom-0 left-0 right-0">
        <div className="flex justify-around items-center py-1 bg-gray-200/10 backdrop-blur-md text-white">
          <div className="flex gap-1 items-center">
            <FaRegCopyright />
            <span className="text-md">
              2026 Nitish Kumar. All rights reserved.
            </span>
          </div>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/nitish1445" target="blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nitish1445/" target="blank">
              <FaLinkedin />
            </a>
            <a href="https://x.com/nitish_yadvv" target="blank">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
