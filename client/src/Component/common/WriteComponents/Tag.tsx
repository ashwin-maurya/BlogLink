import React from 'react'

const Tag = ({tags,getTags}) => {
  return (
    <div className=" bg-gray-100 gap-2 flex flex-col rounded-md p-4 m-3 ">
          <div className="">Tags</div>
          <div className="flex gap-2 h-10">
            <input
              name="tags"
              value={tags}
              onChange={(e) => {
                getTags(e);
              }}
              className="   rounded-md dark:text-black dark:focus:border-secondary dark:border-3 w-full border-2 outline-none  text-[20px]  px-3"
              type="text"
            />
            <button className='flex justify-center items-center bg-primaryMain p-3 rounded-md text-white'>Add</button>
          </div>
          <i className=' text-gray-400'>separate the tags with commas ( , )</i>
          
        </div>
  )
}

export default Tag