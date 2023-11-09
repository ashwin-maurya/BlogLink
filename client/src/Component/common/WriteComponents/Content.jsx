import React from "react";
import TinyMCEEditor from "../../../Helper/Editor";

const Content = ({ blogContent, updateDesc }) => {
  return (
    <div className=" flex mt-6  flex-col justify-around">
      <div className="text-[23px]">Content</div>
      <div className="overflow-hidden rounded-xl  ">
        <TinyMCEEditor
          blogs={blogContent}
          description={updateDesc}
        ></TinyMCEEditor>
      </div>
    </div>
  );
};

export default Content;
