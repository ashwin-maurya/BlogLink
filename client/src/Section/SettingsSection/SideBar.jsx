import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="w-[100%] max-w-[400px]  flex justify-evenl overflow-hidden flex-col p-2">
        <div className="flex justify-center items-center  pt-2 pb-4"></div>
        <ul className="flex-1 flex items-center flex-col">
          <li className="w-[80%] flex  hover:dark:bg-darkBgPrimary hover:bg-bgBlue  rounded-lg my-1">
            <div className="w-[20%] max-sm:w-[15%]">
              <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                <i className="fa fa-user text-bgBlue text-base"></i>
              </div>
            </div>
            <Link
              to="ProfileUpdate"
              className="w-full inline-block text-left font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Profile Details
            </Link>
          </li>

          <li className="w-[80%] flex hover:dark:bg-darkBgPrimary hover:bg-bgBlue  rounded-lg my-1">
            <div className="w-[20%] max-sm:w-[15%]">
              <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                <i className="fa fa-plus text-bgBlue text-base"></i>
              </div>
            </div>
            <Link
              to="SocialUpdate"
              className="w-full inline-block text-left font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Add Social
            </Link>
          </li>
          <li className="w-[80%] flex hover:dark:bg-darkBgPrimary hover:bg-bgBlue  rounded-lg my-1">
            <div className="w-[20%] max-sm:w-[15%]">
              <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                <i className="fa fa-heart text-bgBlue text-base"></i>
              </div>
            </div>
            <Link
              to="RelevantUpdate"
              className="w-full inline-block text-left font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Relevant
            </Link>
          </li>
          <li className="w-[80%] flex hover:dark:bg-darkBgPrimary hover:bg-bgBlue  rounded-lg my-1">
            <div className="w-[20%] max-sm:w-[15%]">
              <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                <i className="fa fa-key text-bgBlue text-base"></i>
              </div>
            </div>
            <Link
              to="ResetPassword"
              className="w-full inline-block text-left font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Reset Password
            </Link>
          </li>
          <li className="w-[80%] flex hover:dark:bg-darkBgPrimary hover:bg-bgBlue  rounded-lg my-1">
            <div className="w-[20%] max-sm:w-[15%]">
              <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                <i className="fa fa-trash-o text-bgBlue text-base"></i>
              </div>
            </div>
            <Link
              to="AccountUpdate"
              className="w-full inline-block text-left font-montserrat leading-normal py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
            >
              Delete Account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
