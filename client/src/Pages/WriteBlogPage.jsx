import React from "react";
import TinyMCEEditor from "../Helper/Editor";

const WriteBlog = () => {
  let val = <h className="bg-red-500">Nice</h>;

  return (
    <section className="bg-gray-100">
      <div className="text-[24px]">
        <div className="flex p-10  ">
          <div className="w-[30%]">Title</div>
          <div className="w-[70%]">
            <input
              className="w-full border-2 outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
        <div className="  flex p-10 ">
          <div className="w-[30%]">Category</div>
          <div>
            <input
              className="border-2 outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
        <div className="flex p-10 ">
          <div className="w-[30%]">Tags</div>
          <div className="w-[40%]">
            <textarea
              // dangerouslySetInnerHTML={{
              //   __html: DOMPurify.sanitize(val)}}
              className=" w-full border-2 outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex p-10 flex-col justify-around">
        <div className="text-[23px]">Content</div>
        <div className="mt-10">
          <TinyMCEEditor></TinyMCEEditor>
        </div>
      </div>
    </section>
  );
};

export default WriteBlog;
