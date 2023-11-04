import React from 'react'

const TopSectionSkeleton = () => {
  return (
    <div className="flex bg-slate-50 dark:text-white w-[100%] dark:bg-darkBgMain flex-col gap-20 py-20 justify-center items-center">
    <div className=" w-[100%] relative flex max-w-[70%] flex-col   justify-center  gap-2">
      <p className="tracking-[2px] w-[300px] h-12    bg-gray-200  dark:bg-gray-700 font-semibold dark:text-secondary text-primaryMain m-1">
     </p>
      <h1 className=" bg-gray-200  dark:bg-gray-700 w-[100%] h-12 font-bold leading-[75px] text-[65px] font-serif">
      </h1>
    </div>
    <div className=" h-[800px] bg-gray-200  dark:bg-gray-700   overflow-hidden w-[100%] max-lg:h-auto">
    
    </div>
  </div>
  )
}

export default TopSectionSkeleton