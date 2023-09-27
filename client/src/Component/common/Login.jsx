import React, { useState } from "react";
import Authentication from "./Authentication";
export default function Login() {
  const [showModal, setModal] = useState(false);
  const ModalStatus = () => {
    setModal((showModal) => !showModal);
  };
  return (
    <>
      {showModal && <Authentication ModalStatus={ModalStatus}></Authentication>}

      <div
        className="flex gap-2 text-lg leading-normal font-medium  px-4"
        onClick={ModalStatus}
      >
        <button className="dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
          Sign In
        </button>
      </div>
    </>
  );
}
