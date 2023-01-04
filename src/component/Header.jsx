import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 h-[8vh] flex items-center sticky top-0 z-10 ">
      <div className="w-[90vw] m-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-white text-md lg:text-3xl border-gray-600 tracking-wider">
            <a href="#about"> Ritesh Maharjan</a>
          </h1>
          <div className="flex justify-between">
            <a href="#project" className="px-1 lg:pr-4">
              Projects
            </a>
            <a href="#skills" className="px-1 lg:pr-4">Skills</a>
            <a href="#contact" className="px-1 lg:pr-4">
              Contact
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1yAxCIGnxWe0hp2cNOF-nX4uou7A9wVpu"
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
