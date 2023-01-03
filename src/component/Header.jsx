import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 h-[10vh] flex items-center">
      <div className="w-[90vw] m-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-white text-xl border-r-2 border-gray-600 tracking-wider pr-2">
            Ritesh Maharjan
          </h1>
          <div className="">
            <button href="#" className="px-4">
              Projects
            </button>
            <button href="#">Skills</button>
          </div>
        </div>
        <button className="">Contact Me</button>
      </div>
    </div>
  );
};

export default Header;
