import React from "react";
import ProductCategory from "../components/ProductCategory";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function ProductPage() {
  Aos.init({once: true});

  return (
    <div className="px-8 md:px-16 py-10 flex flex-col gap-4">
      <div className="h-fit p-8 md:px-16 md:py-8 mb-10 bg-purple bg-opacity-10 shadow-md rounded-3xl flex" data-aos="fade-up" data-aos-duration="1000">
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-3xl md:text-4xl xl:text-5xl font-bold text-center">
              <h1 className="text-darkPurple">Popular</h1>
              <h1 className="text-darkPink">Donuts</h1>
              <h1>for Every Occasion</h1>
            </div>

            <p className="text-sm md:text-base text-center text-gray">
              Discover your favorite donuts! Crafted with the finest ingredients for an unforgettable taste. Whether you're in the mood for something classic or feeling adventurous, our wide selection of donuts will satisfy your cravings.
            </p>
          </div>
          <ProductCategory category={"popular"} style={"flex-wrap justify-center"}/>
        </div>
      </div>

      <div className="my-10 flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="text-2xl font-bold">Specialty Donuts</h3>
        <ProductCategory category={"special"} style={"flex-col md:flex-row justify-center md:justify-start"}/>
      </div>

      <div className="my-10 flex flex-col gap-4" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="text-2xl font-bold">Others</h3>
        <ProductCategory category={"other"} style={"flex-col md:flex-row justify-center md:justify-start"}/>
      </div>
    </div>
  );
}
