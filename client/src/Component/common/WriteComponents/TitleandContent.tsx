import React from 'react'

const TitleandContent = ({blogs,getInput}) => {
  return (
    <div className="  flex-col  flex   ">
    <div className="">Title</div>
    <div className="">
      <input
        name="Title"
        value={blogs?.Title}
        onChange={(e) => {
          getInput(e);
        }}
        className="max-lg:mt-2  w-full  rounded-md dark:text-black dark:focus:border-secondary dark:border-3 border-2  outline-none p-3 text-[23px]"
        type="text"
      />
    </div>
  </div>
  )
}

export default TitleandContent