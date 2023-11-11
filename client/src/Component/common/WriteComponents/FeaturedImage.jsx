import React, { useEffect, useState } from "react";

import { uploadFeaturedImage } from "../../../api/ImageUpload";
import { Button, Progress } from "antd";
const FeaturedImage = ({
  blogs,
  setblog,
  postid,
  featuredImage,
  setfeaturedImage,
}) => {
  const [progress, setProgress] = useState(0);
  const [select, setselect] = useState(false);

  const [file, setFile] = useState(null);
  const getInput = (e) => {
    if (select == false) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
      // console.log(file)
    } else {
      setblog({ ...blogs, ...{ Blog_url: e.target.value } });
      console.log(blogs);
    }
  };
  useEffect(() => {
    setblog({ ...blogs, ...{ Blog_url: featuredImage } });
    console.log(blogs);
  }, [featuredImage]);
  const upload = (e) => {
    uploadFeaturedImage(file, postid, setFile, setfeaturedImage, setProgress);
  };
  return (
    <div className="flex-col dark:bg-darkBgPrimary text-white  flex bg-gray-100 gap-4 rounded-md p-4 m-3 ">
      <div className="flex justify-between items-center relative ">
        <p>Featured Image</p>
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
        <Button
          className={`${
            select == false
              ? "bg-primaryMain"
              : "bg-gray-200 dark:bg-darkBgPrimary"
          }   dark:text-white border-none`}
          onClick={() => {
            setselect(false);
          }}
        >
          select from images
        </Button>
        <Button
          className={`${
            select == true
              ? "bg-primaryMain"
              : "bg-gray-200 dark:bg-darkBgPrimary"
          }   dark:text-white border-none`}
          onClick={() => {
            setselect(true);
          }}
        >
          Insert Link
        </Button>
      </div>
      <div className=" flex justify-around items-center w-full">
        {select == false ? (
          <>
            <label className="flex flex-col rounded-lg   w-full group text-center">
              <div className=" w-full text-center flex  items-center justify-center  flex-row">
                {file?.name ? (
                  <p>{file?.name}</p>
                ) : (
                  <p className="text-primaryMain  pointer-none border-b-[1px] dark:border-white  border-primaryMain ">
                    <span className="dark:text-white text-sm">
                      {" "}
                      select from storage
                    </span>{" "}
                  </p>
                )}
              </div>

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
          </>
        ) : (
          <>
            <input
              type="text"
              name="Blog_url"
              value={blogs?.Blog_url}
              onChange={(e) => {
                getInput(e);
              }}
              className="    rounded-md border-2 dark:text-black dark:focus:border-secondary dark:border-3 outline-none p-1.5 text-[17px]"
              accept="image/*"
            />

            <Button
              type="primary"
              style={{ padding: "20px" }}
              // onClick={upload}
              className="button-submit my-2 rounded-md  font-bold bg-primaryMain dark:bg-secondary cursor-pointer flex justify-between text-white items-center "
            >
              <p className="text-white ">Insert</p>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedImage;
