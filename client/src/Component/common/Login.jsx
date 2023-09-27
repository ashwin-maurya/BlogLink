import React, { useState } from "react";
import Authentication from "./Authentication";
import { onLogout } from "../../api/AuthAPI";
import Profile from "./Profile";

export default function Login() {
  const [showModal, setModal] = useState(false);
  const localData = JSON.parse(localStorage.getItem("GoogleAuthData"));

  const ModalStatus = () => {
    setModal((showModal) => !showModal);
  };
  return (
    <>
      {showModal && <Authentication ModalStatus={ModalStatus}></Authentication>}

      {JSON.parse(localStorage.getItem("GoogleAuthData")) != null ? (
        <div className="group ">
          <Profile img={localData.photoURL} name={localData.useName}></Profile>
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
