import React from "react";

export default function ProfileMainSkeleton() {
  return (
    <>
      <section className="relative block h-[400px] ">
        <div className=" w-full h-full">
          <div className="relative group/buttons h-[300px] bg-bgBlue dark:bg-gray-700"></div>
        </div>
      </section>

      <section className="relative pt-8 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-darkBgPrimary w-[60%] max-lg:w-[95%]  mx-auto mb-6 shadow-xl rounded-lg -mt-60 p-10">
            <div className="flex flex-wrap justify-center relative ">
              <div className="shadow-md rounded-full w-40 h-40  dark:bg-gray-700 align-middle border-none -mt-24 bg-white"></div>
            </div>
            <div className="text-center my-4 flex flex-col justify-center items-center   animate-pulse">
              <h3 className="text-3xl font-semibold leading-normals text-blueGray-700 mb-2 dark:text-darkTextMain">
                <div className="w-40 h-6 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex flex-col">
                  <div>
                    <div className="w-64 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex flex-col">
                  <div>
                    <div className="w-32 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 break-words w-full max-lg:flex-col">
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain flex flex-col">
                <div className="flex justify-evenly gap-5">
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center"></div>
                  </div>
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center"></div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain">
                <div className="flex items-center">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-briefcase  text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold  w-[90%]  ">
                    <div>
                      <div className="w-32 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-graduation-cap text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <div>
                      <div className="w-32 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-map-marker text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <div>
                      <div className="w-32 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-calendar-o text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <div>
                      <div className="w-32 h-4 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
