import React from "react";

const TopSection = ({ blog1 }) => {
  // console.log(blog1)
  return (
    <div className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col gap-20 py-10 justify-center items-center w-[70%]  ">
      <div className=" relative flex  flex-col   justify-center  gap-2">
        <p className="tracking-[1.5px] max-md:text-[12px] text-[15px]   rounded-md    font-semibold dark:text-secondary text-primaryMain m-1 uppercase">
          {blog1?.Category}
        </p>
        <h1 className="max-md:leading-6  max-md:mt-[-10px] my-[-26px] max-md:text-[29px]  font-bold leading-[50px] mt-[-10px] text-[40px] font-montserrat capitalize">
          {blog1?.Title}{" "}
        </h1>
      </div>
      <div className=" mt-[-35px] max-md:mt-[-55px] overflow-hidden mb-[-28px] max-lg:h-auto max-sm:mt-[-80px]">

        <img
          className="overflow-hidden  h-[400px] object-contain w-[100%]"
          src={blog1?.Blog_url}
          alt="Blog_url"
        />
      </div>
    </div>
  );
};

export default TopSection;
