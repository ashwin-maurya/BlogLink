import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileModal } from "./";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className="relative flex gap-2 text-lg leading-normal font-medium px-4 items-center ">
          <img
            src={user.picture}
            alt=""
            className="rounded-full"
            width={35}
            height={35}
          />
          <span className="dark:text-darkTextMain">{user.name}</span>
          <ProfileModal />
        </div>
      )}
    </>
  );
}
