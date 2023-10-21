import React, { useContext, useEffect, useState } from "react";
import Authentication from "./Auth/Authentication";
import Profile from "./Profile";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";

export default function Login() {
  const context = useContext(AuthContext);
  const { UserDetails, getCurrentUser, AuthStatus, setAuthStatus } = context;
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    if (AuthStatus) {
      getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
    }
  }, [AuthStatus]);

  const ModalStatus = () => {
    setModal((showModal) => !showModal);
  };

  return (
    <>
      {showModal && (
        <Authentication
          ModalStatus={ModalStatus}
          setAuthStatus={setAuthStatus}
        ></Authentication>
      )}

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
              <div className="w-40 h-8 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="flex gap-2 text-lg leading-normal font-medium px-4"
          onClick={ModalStatus}
        >
          <button className="dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
