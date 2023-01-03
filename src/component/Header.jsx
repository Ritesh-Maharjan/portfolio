import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 h-[8vh] flex items-center sticky top-0">
      <div className="w-[90vw] m-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-xl border-r-2 border-gray-600 tracking-wider pr-2">
            <a href="#about"> Ritesh Maharjan</a>
          </h1>
          <div className="">
            <a href="#project" className="px-4">
              Projects
            </a>
            <a href="#skills">Skills</a>
          </div>
        </div>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
