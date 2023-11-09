import React from "react";
import { hero } from "../../Assets/images";

export default function Hero() {
  return (
    <>
      <section className="w-full  relative flex items-center flex-col">
        <div className=" max-h-[400px] overflow-hidden">
          <img src={hero} alt="hero-image" className="w-full" />
        </div>
        <div className="relative rounded-xl w-[60%] bg-white max-lg:bottom-[30px] bottom-[100px] max-lg:w-[90%] shadow-[0_18px_10px_-15px_rgba(0,0,0,0.1)] group  dark:bg-darkBgPrimary">
          <div className="px-20  py-10 flex flex-col items-center max-lg:px-10 max-lg:py-5">
            <span className="text-primaryMain dark:text-secondary text-[18px] font-medium max-lg:text-[12px] tracking-[5px]">
              EXPLAINERS
            </span>
            <h1 className="text-[40px] font-bold py-5 text-center max-lg:py-2 max-lg:text-[20px] font-serif hover:text-primaryMain dark:text-darkTextMain dark:hover:text-secondary">
              How Scientists Are Tackling the Tricky Task of Solar Cycle
              Prediction
            </h1>
            <div className="flex flex-row items-center justify-center ">
              <p className="text-lg max-lg:text-[15px] ml-2 font-semibold font-palanquin text-gray-700 dark:text-darkTextMain">
                By Ashwin Maurya
              </p>
              <span className="text-lg max-lg:text-[15px] max-lg:text-sm ml-2 font-semibold font-palanquin text-gray-400">
                -
              </span>
              <p className="text-lg max-lg:text-sm ml-1 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary">
                8 July, 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
