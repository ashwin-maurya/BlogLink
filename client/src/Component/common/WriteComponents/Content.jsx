import React from "react";
import TinyMCEEditor from "../../../Helper/Editor";

const Content = ({ blogContent, updateDesc }) => {
  return (
    <div className=" flex mt-6  flex-col justify-around bg-gray-100 p-3 rounded ">
      <div className="text-[23px]">Content</div>
      <div className="overflow-hidden">
        <TinyMCEEditor
          blogs={blogContent}
          description={updateDesc}
        ></TinyMCEEditor>
      </div>
    </div>
  );
};

export default Content;
