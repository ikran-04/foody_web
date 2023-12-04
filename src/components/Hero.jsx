import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="w-4/5 m-auto bg-[url('/hero_image.svg')] h-[600px] rounded-xl bg-cover flex items-center">
        <div className="w-1/2  p-20 space-y-5">
          <h1 className="text-6xl font-bold">Order Your Daily Groceries </h1>
          <p className="text-xl font-semibold text-yellow-700">
            #Free Delivery
          </p>
          <div className="h-12 bg-white rounded-full flex items-center space-x-2">
            <div className="ml-4">
              <IoSearchOutline />
            </div>

            <input
              type="text"
              placeholder="search your daily groceries"
              className="outline-0 bg-transparent w-11/12"
            />
            <button className="w-36 rounded-full bg-yellow-400 text-white h-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
