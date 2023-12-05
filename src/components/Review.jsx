import React from "react";
import { IoStar } from "react-icons/io5";
const Review = () => {
  return (
    <div className="p-5 rounded-xl flex-shrink-0 w-[550px] bg-white drop-shadow-lg space-y-5">
      <div className="profile flex items-center space-x-2">
        <img src="/profile.svg" alt="" className="w-12 h-12" />
        <div>
          <h1 className="text-lg font-medium">Ikran Hashi</h1>
          <p className="text-sm text-gray-500">Software developer</p>
        </div>
      </div>
      <div className="text-yellow-500 flex space-x-1 items-center">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>
      <div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          dolores veniam laborum assumenda sequi ab iste eaque numquam provident
          voluptate?
        </p>
      </div>
    </div>
  );
};

export default Review;
