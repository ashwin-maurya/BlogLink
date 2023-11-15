import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import Authentication from "./Auth/Authentication";
import RelevantModal from "./Auth/RelevantModal";

export default function Signin() {
  const context = useContext(AuthContext);
  const { setAuthStatus, showAuthModal, setAuthModal } = context;
  const ModalStatus = () => {
    setAuthModal((showAuthModal) => !showAuthModal);
  };
  const [showRelevantModal, setShowRelevantModal] = useState(false);
  const RelevantModalStatus = () => {
    console.log("hey123");
    setShowRelevantModal((showRelevantModal) => !showRelevantModal);
    console.log(showRelevantModal);
  };
  return (
    <>
      {showAuthModal && (
        <Authentication
          ModalStatus={ModalStatus}
          setAuthStatus={setAuthStatus}
          RelevantModalStatus={RelevantModalStatus}
        ></Authentication>
      )}

      {showRelevantModal && (
        <RelevantModal
          RelevantModalStatus={RelevantModalStatus}
        ></RelevantModal>
      )}
      <div
        className="flex gap-2 text-lg leading-normal font-medium px-4"
        onClick={ModalStatus}
      >
        <button className="dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
          Sign In
        </button>
      </div>
    </>
  );
}
