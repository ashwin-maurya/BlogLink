import React from 'react'

const TopSection = ({blog1}) => {
  // console.log(blog1)
  return (
    <div className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col gap-20 py-20 justify-center items-center">
    <div className=" relative flex  flex-col   justify-center  gap-2">
      <p className="tracking-[2px] font-semibold dark:text-secondary text-primaryMain m-1">
        {blog1?.Category}
      </p>
      <h1 className=" font-bold leading-[75px] text-[65px] font-serif">
        {blog1?.Title}{" "}
      </h1>
    </div>
    <div className="  overflow-hidden w-[100%] max-lg:h-auto">
      <img
        className="overflow-hidden w-[100%]"
        src={blog1?.Blog_url}
        alt="Blog_url"
      />
    </div>
  </div>
  )
}

export default TopSection