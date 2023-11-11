import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";
import Signin from "./Signin";
export default function Login() {
  const context = useContext(AuthContext);
  const { UserDetails, getCurrentUser, AuthStatus, setAuthStatus } = context;

  useEffect(() => {
    if (AuthStatus) {
      getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
    }
  }, [AuthStatus]);

  return (
    <>
      {AuthStatus ? (
        <div className="group">
          {UserDetails ? (
            <Profile
              profileImg={
                UserDetails?.profileImg != ""
                  ? UserDetails?.profileImg
                  : profileDefault
              }
              name={UserDetails?.username}
            ></Profile>
          ) : (
            <div className="flex gap-2 text-lg leading-normal font-medium px-4 items-center mt-3">
              <div className="w-8 h-8 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          )}
        </div>
      ) : (
        <Signin />
      )}
    </>
  );
}
