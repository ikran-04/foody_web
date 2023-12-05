import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Product from "./components/Product";
import Review from "./components/Review";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Footer from "./components/Footer";

function App() {
  const divRef = useRef();
  const handleScrollLeft = () => {
    divRef.current.scrollLeft -= 400;
    console.log("left");
  };
  const handleScrollRight = () => {
    divRef.current.scrollLeft += 400;
    console.log("right");
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-4/5 m-auto py-10 grid grid-cols-7 justify-items-center">
        <Category src={"/drink_icon.svg"} />
        <Category src={"/fish_icon.svg"} />
        <Category src={"/apple_icon.svg"} />
        <Category src={"/drink_icon.svg"} />
        <Category src={"/apple_icon.svg"} />
        <Category src={"/drink_icon.svg"} />
        <Category src={"/drink_icon.svg"} />
      </div>

      <div className="w-4/5 m-auto py-20 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Popular Products</h1>
          <a
            href=""
            className="px-8 py-2 bg-yellow-500 text-white rounded-full"
          >
            See all
          </a>
        </div>
        <div className="grid grid-cols-4 gap-10 py-10 ">
          <Product src={"/prd_img1.svg"} />
          <Product src={"/prd)img2.svg"} />
          <Product src={"/prd_img5.svg"} />
          <Product src={"/prd_img3.svg"} />
          <Product src={"/prd_img4.svg"} />
          <Product src={"/prd_img5.svg"} />
          <Product src={"/prd)img2.svg"} />
          <Product src={"/prd_img1.svg"} />
        </div>
      </div>

      <div className="w-4/5 m-auto p-10 bg-yellow-100">
        <h1 className="text-2xl font-semibold">Popular Bundle Pack</h1>

        <div className="grid grid-cols-4 gap-10 py-10 ">
          <Product src={"/prd_img1.svg"} />
          <Product src={"/prd)img2.svg"} />
          <Product src={"/prd_img5.svg"} />
          <Product src={"/prd_img3.svg"} />
          <Product src={"/prd_img4.svg"} />
          <Product src={"/prd_img5.svg"} />
          <Product src={"/prd)img2.svg"} />
          <Product src={"/prd_img1.svg"} />
        </div>
      </div>

      <div className="bg-gray-100 my-10 py-10">
        <h1 className="text-center text-4xl font-bold">
          Read What Our Clients Say
        </h1>
        <div className="relative">
          <div
            ref={divRef}
            className="flex overflow-x-auto scroll-smooth space-x-10 items-center py-10 "
          >
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
          <div className="absolute top-1/2 px-5 w-full flex items-center justify-between">
            <button
              onClick={handleScrollLeft}
              className="text-white bg-gray-500/30 hover:bg-indigo-700 px-4 py-2 rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleScrollRight}
              className="text-white bg-gray-500/30 0 px-4 py-2 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <div className="w-8 h-1 bg-green-600 rounded-md"></div>
          <div className="w-8 h-2 bg-green-800 rounded-md"></div>
          <div className="w-8 h-1 bg-green-600 rounded-md"></div>
        </div>
      </div>

      <div>
        <img src="/app.svg" alt="" />
        <div>
          <h1>Download App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione
            aut tempore cumque corrupti eos tenetur eveniet inventore, quod
            provident quam sed deleniti exercitationem dolorum veniam amet dolor
            soluta eius! Rerum animi amet perspiciatis.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
