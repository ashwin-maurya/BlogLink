import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileModal } from "./";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  const closeProfileModal = () => {
    setModalOpen(false);
  };

  const openProfileModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {isAuthenticated && (
        <div
          className="relative flex gap-2 text-lg leading-normal font-medium px-4 items-center "
          onClick={openProfileModal}
        >
          <img
            src={user.picture}
            alt=""
            className="rounded-full"
            width={35}
            height={35}
          />
          <span className="dark:text-darkTextMain">{user.name}</span>
          <ProfileModal closeProfileModal={closeProfileModal} />
        </div>
      )}
    </>
  );
}
