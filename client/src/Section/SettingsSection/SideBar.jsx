import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="w-[100%] max-w-[400px]  flex justify-evenl overflow-hidden flex-col p-2">
        <div className="flex justify-center items-center  pt-2 pb-4"></div>
        <ul className="flex-1 flex items-center flex-col">
          <li className="w-[80%] hover:dark:bg-darkBgPrimary rounded-lg my-1">
            <Link
              to="ProfileUpdate"
              className="w-full inline-block text-center font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Profile Details
            </Link>
          </li>
          <li className="w-[80%] hover:dark:bg-darkBgPrimary rounded-lg my-1">
            <Link
              to="UsernameUpdate"
              className="w-full inline-block text-center font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Username
            </Link>
          </li>
          <li className="w-[80%] hover:dark:bg-darkBgPrimary rounded-lg my-1">
            <Link
              to="AccountUpdate"
              className="w-full inline-block text-center font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
