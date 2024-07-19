import React, { forwardRef } from "react";
import DonutHero from "../assets/donutHero.png";
import Button from "./ui/Button";

const HeroSection= forwardRef((props, ref) =>{
  const {onClick} = props;

  return (
    <div className="mb-16 md:mb-0 h-screen md:h-[90vh] px-8 md:px-16">
      <div className="flex h-full flex-col md:flex-row gap-10 justify-center md:justify-between items-center">
        <div className="md:w-1/2">
          <img src={DonutHero} alt="donut" />
        </div>

        <div className="md:w-1/2 md:pl-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">Craving</h1>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darkPink">Something</h1>
              </div>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darkPurple">Sweet?</h1>
            </div>

            <h3 className="text-xl md:text-2xl text-purple ">Shop Our Perfect Donut Now!</h3>
            <p className="text-base xl:text-lg text-gray py-2">Each bite is a journey of flavor, crafted with love and the finest ingredients. Treat yourself or surprise someone special with our delightful selection of donuts.</p>
            <div className="w-full flex justify-center mt-10">
              <Button textButton='Get Your Donut' onClick={() => onClick(ref)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
