import React from "react";
import { Logout, ViewProfile } from "./";

export default function ProfileModal() {
  return (
    <>
      <div className="absolute p-2 top-[35px] w-[150px] left-14 hidden  group-hover:flex   flex-col rounded-lg bg-white dark:bg-darkBgPrimary shadow-xl overflow-hidden border border-gray-300 dark:border-gray-700">
        <ViewProfile />
        <Logout />
      </div>
    </>
  );
}
