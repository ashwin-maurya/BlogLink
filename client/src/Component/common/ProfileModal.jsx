import React from "react";
import { Logout, ViewProfile } from "./";

export default function ProfileModal() {
  console.log("I am here");
  return (
    <>
      <div className="absolute p-2 top-[45px] w-[150px] right-2 hidden  group-hover:flex   flex-col rounded-lg bg-white dark:bg-darkBgPrimary shadow-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <ViewProfile />
        <Logout />
      </div>
    </>
  );
}
