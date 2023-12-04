import React from "react";

import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div
      className="w-4/5 m-auto flex justify-between items-center py-5
    "
    >
      <img src="/logo.svg" alt="" className="w-20" />
      <ul className="flex space-x-8 text-sm text-gray-500">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Our Packages</a>
        </li>
        <li>
          <a href="">Our App</a>
        </li>
      </ul>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-5">
          <button
            type="button"
            class="relative inline-flex items-center p-2  text-sm font-medium text-center text-red-500 bg-red-500/20 rounded-full hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <GoHeart />
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">
              2
            </div>
          </button>
          <button
            type="button"
            class="relative inline-flex items-center p-2 text-sm font-medium text-center text-green-500 bg-green-500/20 rounded-full hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <IoCartOutline />
            <div class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-green-500 border-2 border-white rounded-full -top-2 -end-2 ">
              8
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm ">Ikran Hashi</p>
          <img src="/profile.svg" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
