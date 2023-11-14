import React from "react";

export default function BlogCardSkeleton() {
  return (
    <>
      <div className="flex w-[100%] md:my-2 dark:bg-darkBgPrimary my-2 rounded-md bg-bgBlue flex-col p-6 pt-5 pb-2 ">
        <div className="max-lg:gap-2  gap-8 flex  justify-center w-full">
          <div className="w-[70%] pr-4 flex flex-col ">
            <div className="w-32 h-3 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
            <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
          </div>
          <div className="h-20 w-[30%] bg-gray-300 rounded-lg dark:bg-gray-700"></div>
        </div>
        <div className="flex pt-2">
          <div className="w-20 h-8 mb-2.5 my-2 mx-1  bg-gray-200 rounded-lg dark:bg-gray-700"></div>
          <div className="w-20 h-8 mb-2.5 my-2 mx-1  bg-gray-200 rounded-lg dark:bg-gray-700"></div>
        </div>
      </div>
    </>
  );
}
