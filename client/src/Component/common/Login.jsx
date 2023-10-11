import React, { useContext, useEffect, useState } from "react";
import Authentication from "./Auth/Authentication";
import { onLogout } from "../../api/AuthAPI";
import Profile from "./Profile";

import AuthContext from "../../Helper/Context/AuthContext";
export default function Login() {
  const context = useContext(AuthContext);
  const { UserDetails, getCurrentUser, AuthStatus, setAuthStatus } = context;
  const [showModal, setModal] = useState(false);
  const func = async () => {
    await getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
  };

  useEffect(() => {
    if (AuthStatus) {
      func();
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
          <Profile
            profileImg={UserDetails?.profileImg}
            name={UserDetails?.username}
          ></Profile>
        </div>
      ) : (
        <div
          className="flex gap-2 text-lg leading-normal font-medium  px-4"
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
