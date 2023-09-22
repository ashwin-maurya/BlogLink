import React from "react";
import { Logout, ViewProfile } from "./";

export default function ProfileModal() {
  return (
    <>
      <div className="absolute p-2 top-[35px] w-[150px] left-14 hidden  group-hover:flex   flex-col rounded-lg bg-white dark:bg-darkBgPrimary shadow-xl overflow-hidden border border-gray-300 ">
        <div className="flex justify-center items-center dark:text-darkTextMain ">
          <ViewProfile />
        </div>
        <div className="flex justify-center items-center">
          <Logout />
        </div>
      </div>
    </>
  );
}
