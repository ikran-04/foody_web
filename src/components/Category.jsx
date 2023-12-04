import React from "react";

const Category = ({ src }) => {
  return (
    <div className="w-36 h-36 bg-gray-50 flex justify-center items-center rounded-md">
      <img src={src} alt="" className="w-16 h-16" />
    </div>
  );
};

export default Category;
