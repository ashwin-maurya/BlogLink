import React from "react";

export default function HomeHeroSkeleton() {
  return (
    <>
      <div className="max-h-[400px] min-h-[400px] w-full overflow-hidden bg-lightSkeleton dark:bg-gray-700"></div>

      <div className="relative rounded-xl w-[60%] bg-white max-lg:bottom-[30px] bottom-[100px] max-lg:w-[90%] shadow-[0_18px_10px_-15px_rgba(0,0,0,0.1)] group dark:bg-darkBgPrimary">
        <div className="px-20  py-10 flex flex-col items-center max-lg:px-10 max-lg:py-5">
          <span className="text-primaryMain dark:text-secondary text-[18px] font-medium max-lg:text-[12px] tracking-[5px]">
            <div className="w-64 h-6 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </span>
          <h1 className="text-[40px] w-full font-bold py-5 text-center max-lg:py-2 max-lg:text-[20px] font-serif  dark:text-darkTextMain  flex items-center flex-col ">
            <div className="w-full h-10 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="w-64 h-8 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </h1>
          <div className="flex flex-row items-center justify-center ">
            <div className="text-lg max-lg:text-[15px] ml-2 font-semibold font-palanquin text-gray-700 dark:text-darkTextMain">
              <div className="w-40 h-6 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <span className="text-lg max-lg:text-[15px] max-lg:text-sm ml-2 font-semibold font-palanquin text-gray-400"></span>
            <div className="text-lg max-lg:text-sm ml-1 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary">
              <div className="w-40 h-6 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
