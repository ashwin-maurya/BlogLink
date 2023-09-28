import React, { useContext, useEffect, useState } from "react";
import Authentication from "./Authentication";
import { onLogout } from "../../api/AuthAPI";
import Profile from "./Profile";

import AuthContext from "../../Helper/Context/AuthContext";
export default function Login() {
  const context = useContext(AuthContext);
  const { User, UserDetails, getCurrentUser } = context;
  const func = async () => {
    await getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
  };

  useEffect(() => {
    User && func();
  }, []);

  const [showModal, setModal] = useState(false);
  // const localData = JSON.parse(localStorage.getItem("UserData"));

  const ModalStatus = () => {
    setModal((showModal) => !showModal);
  };
  return (
    <>
      {showModal && <Authentication ModalStatus={ModalStatus}></Authentication>}

      {User != null ? (
        <div className="group ">
          <Profile img="" name={UserDetails?.name}></Profile>
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
