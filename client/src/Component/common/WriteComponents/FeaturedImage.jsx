import React, { useEffect, useState } from "react";

import { uploadFeaturedImage } from "../../../api/ImageUpload";
import { Button, Progress } from "antd";
const FeaturedImage = ({ blogs, setfeaturedImage }) => {
  // console.log(blogs);
  const [progress, setProgress] = useState(0);
  const [select, setselect] = useState(false);
  console.log(blogs);
  const [file, setFile] = useState(null);
  const getInput = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const getInput2 = (e) => {
    setfeaturedImage(e.target.value);
  };

  const upload = (e) => {
    uploadFeaturedImage(file, setfeaturedImage, setProgress);
  };
  return (
    <div className="flex-col dark:bg-darkBgPrimary text-white  flex bg-gray-100 gap-4 rounded-md p-4 m-3 ">
      <div className="flex justify-between items-center relative ">
        <p className="text-black dark:text-white">Featured Image</p>
        <div className=" absolute right-2">
          {progress === 0 ? (
            <></>
          ) : (
            <div className="progress-bar text-white">
              <Progress
                type="circle"
                style={{ color: "green" }}
                size={40}
                percent={progress}
              />
            </div>
          )}
        </div>
      </div>
      <div className="dark:text-white flex justify-evenly">
        <button
          className={`bg-${
            select
              ? "gray-200 text-gray-400 dark:text-gray-400 dark:bg-darkBgPrimary"
              : "primaryMain text-white"
          } border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 rounded-md px-4 py-1 font-semibold `}
          onClick={() => setselect(false)}
        >
          Select from Images
        </button>
        <button
          className={`bg-${
            select
              ? "primaryMain text-white"
              : "gray-200 text-gray-400 dark:text-gray-400 dark:bg-darkBgPrimary"
          } border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400 rounded-md px-4 py-1 font-semibold `}
          onClick={() => setselect(true)}
        >
          Insert Link
        </button>
      </div>
      <div className=" flex justify-around items-center w-full">
        {select == false ? (
          <>
            <label className="flex flex-col rounded-lg   w-full group text-center">
              <div className=" w-full text-center flex  items-center justify-center  flex-row">
                {file?.name ? (
                  <p className="dark:text-white text-gray-900">
                    Image Selected: {file?.name}
                  </p>
                ) : (
                  <p className="text-primaryMain cursor-pointer rounded-lg border-gray-400 border-2 border-dashed w-full  pb-1 mr-2">
                    <span className="dark:text-gray-400 text-gray-400 font-bold text-sm group text-center">
                      {" "}
                      Choose Image
                    </span>{" "}
                  </p>
                )}
              </div>

              <input
                name="Blog_url"
                onChange={(e) => {
                  getInput(e);
                }}
                // value={blogs.Blog_url}
                type="file"
                className="hidden dark:text-darkTextMain text-gray-900 dark:bg-darkBgPrimary border-gray-300 dark:border-gray-700 hover:border-primaryMain hover:dark:border-secondary focus:border-primaryMain focus:dark:border-secondary outline-none transition-colors duration-300 ease-in-out w-full border-2 rounded text-[20px]  px-3"
              />
            </label>
            <button
              disabled={file?.name ? false : true}
              key="submit"
              type="primary"
              onClick={upload}
              className={`${
                file == null ? "bg-gray-500" : "bg-primaryMain"
              } border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400   rounded-md   px-4 py-1 font-semibold text-white `}
            >
              Upload
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="Blog_url"
              value={blogs?.Blog_url}
              onChange={(e) => {
                getInput2(e);
              }}
              className="dark:text-darkTextMain text-gray-900 dark:bg-darkBgPrimary border-gray-300 dark:border-gray-700 hover:border-primaryMain hover:dark:border-secondary focus:border-primaryMain focus:dark:border-secondary outline-none transition-colors duration-300 ease-in-out w-full rounded-md border-2 mx-2 dark:focus:border-secondary dark:border-3 p-1.5 text-[17px]"
              accept="image/*"
            />

            {/* <Button
              type="primary"
              // onClick={upload}
              className="border-2 h-auto border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400   rounded-md bg-primaryMain dark:bg-secondary px-4 py-1 text-[19px] font-semibold text-white "
            >
              Insert
            </Button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedImage;
