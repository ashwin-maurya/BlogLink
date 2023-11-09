import React, { useEffect } from "react";

import { uploadFeaturedImage } from "../../../api/ImageUpload";
import { Button } from "antd";
const FeaturedImage = ({
  blogs,
  setblog,
  postid,
  featuredImage,
  setfeaturedImage,
}) => {
  const [file, setFile] = React.useState(null);
  const getInput = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    // console.log(file)
  };
  useEffect(() => {
    setblog({ ...blogs, ...{ Blog_url: featuredImage } });
    console.log(blogs);
  }, [featuredImage]);
  const upload = (e) => {
    uploadFeaturedImage(file, postid, setFile, setfeaturedImage);
  };
  return (
    <div className="flex-col dark:bg-darkBgPrimary text-white  flex bg-gray-100 gap-4 rounded-md p-4 m-3 ">
      <div className="">Featured Image</div>
      <div className=" flex justify-around w-full">
        <label className="flex flex-col rounded-lg   w-full group text-center">
          <div className=" w-full text-center flex  items-center justify-center  flex-row">
            {file?.name ? (
              <p>{file?.name}</p>
            ) : (
              <p className="text-primaryMain  pointer-none border-b-[1px] border-primaryMain ">
                <span className="text-sm">Please select an image</span>{" "}
              </p>
            )}
          </div>
          {/* {progress === 0 ? (
                  <></>
                ) : (
                  <div className="progress-bar">
                    <Progress type="circle" percent={progress} />
                  </div>
                )} */}
          <input
            name="Blog_url"
            onChange={(e) => {
              getInput(e);
            }}
            type="file"
            className="hidden"
          />
        </label>
        <Button
          disabled={file?.name ? false : true}
          key="submit"
          type="primary"
          style={{ padding: "20px" }}
          onClick={upload}
          className="button-submit my-2 rounded-md  font-bold bg-primaryMain dark:bg-secondary cursor-pointer flex justify-between text-white items-center "
        >
          <p className="text-white ">Upload</p>
        </Button>
        {/* <input
      type="file"

        name="Blog_url"
        value={blogs?.Blog_url}
        onChange={(e) => {
          getInput(e);
        }}
        className="max-lg:mt-2  w-full  rounded-md border-2 dark:text-black dark:focus:border-secondary dark:border-3 outline-none p-3 text-[23px]"
        accept='image/*'
      /> */}
      </div>
    </div>
  );
};

export default FeaturedImage;
