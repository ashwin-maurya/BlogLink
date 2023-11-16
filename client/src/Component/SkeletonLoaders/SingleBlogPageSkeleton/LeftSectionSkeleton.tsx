import React from "react";

const LeftSectionSkeleton = () => {
  return (
    <section className="flex   max-2xl:w-full max-xl:mt-3  flex-col justify-center items-center  ">
      <div className=" flex justify-center items-center w-28 md:w-[140px] h-28 rounded-full  bg-gray-200  dark:bg-gray-700"></div>
      <div className="flex gap-5 flex-col mt-4 md:mt-3 justify-center items-center">
        <p className="bg-gray-200 h-4 w-[126px]  dark:bg-gray-700 dark:hover:text-secondary md:text-[24px]   leading-9 md:leading-5 text-center font-montserrat  font-semibold text-3xl"></p>
        <p className="font-serif md:text-center h-4 w-[126px] bg-gray-200  dark:bg-gray-700 opacity-50 md:text-[23px] text-[23px]">
          {/* <i>Contributing Writer</i> */}
        </p>

        <p className="bg-gray-200  dark:bg-gray-700 border-y-[2px] py-6 md:py-3 opacity-50 tracking-[-1px]"></p>
      </div>
    </section>
  );
};

export default LeftSectionSkeleton;
