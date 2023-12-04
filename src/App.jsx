import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Product from "./components/Product";
function App() {
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
    </div>
  );
}

export default App;
