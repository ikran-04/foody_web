import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { HiMiniShoppingBag } from "react-icons/hi2";
const Product = ({ src }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="border rounded-xl bg-white w-[350px] h-[380px]">
      <img src={src} alt="" className="w-full h-[200px]" />
      <div className="p-5 space-y-2">
        <h1 className="text-2xl font-semibold">Bannana</h1>
        <p className="text-sm text-gray-400">1kg</p>
        <p className="text-xl font-semibold">$12</p>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <button
              className="border px-2 py-1 rounded"
              onClick={handleDecrement}
            >
              <FiMinus size={16} />
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="border px-2 py-1 rounded"
              onClick={handleIncrement}
            >
              <GoPlus size={16} />
            </button>
          </div>
          <button className="p-2 bg-green-500 rounded-full text-white">
            <HiMiniShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
