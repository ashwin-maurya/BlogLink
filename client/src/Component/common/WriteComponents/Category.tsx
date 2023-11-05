import React from 'react'
import ReactSelect from "react-select"

const Category = ({blogs,getInput}) => {
    const options=["python","Javascript","CSS","Tech"]
  return (
    
    <div className="flex-col  group flex bg-gray-100 gap-4  rounded-md p-4 m-3  ">
    <div className=" ">Category</div>
    <div className="">
        <ReactSelect 
         
         options={options.map(cat=>{
return {value:cat,label:cat}
         })}
         ></ReactSelect>
      <input
        name="Category"
        value={blogs?.Category}
        onChange={(e) => {
          getInput(e);
        }}
        className="max-lg:mt-2  w-full  rounded-md dark:text-black dark:focus:border-secondary dark:border-3 border-2 focus:border-primaryMain outline-none p-3 text-[23px]"
        type="text"
      />
    </div>
  </div>
  )
}

export default Category