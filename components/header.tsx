import React from "react";
import Phone from "../svgs/phone";
import Email from "../svgs/email";
import Github from "../svgs/github";

function header() {
  return (
    <div className="shadow-md w-screen p-2">
      <div className="flex w-4/5 md:w-2/4 m-auto justify-between items-center">
        <p className="text-5xl md:text-7xl pb-3">{`<`}</p>
        <div className="relative">
          <p className="text-2xl md:text-4xl">Jone Smith</p>
          <span className="w-32 text-center text-sm md:text-base md:w-48 md:-bottom-8 absolute -bottom-4 left-2/4 transform -translate-x-2/4">
            Front End Developer
          </span>
        </div>
        <p className="pb-3 text-5xl md:text-7xl">{`/>`}</p>
      </div>
      <div className="flex w-2/4 m-auto mt-2 justify-between md:hidden">
        <div className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer">
          <Phone />
        </div>
        <div className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer">
          <Email />
        </div>
        <div className="w-6 h-6 text-gray-400 hover:fill-current cursor-pointer">
          <Github />
        </div>
      </div>
    </div>
  );
}

export default header;
