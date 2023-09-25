import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export default function ViewProfile() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div
          className="flex gap-2 py-1 hover:bg-bgBlue rounded-md text-lg leading-normal font-medium px-4 items-center dark:text-darkTextMain dark:hover:bg-darkBgMain  hover:text-primaryMain  dark:hover:text-secondary"
          onClick={() => {
            navigate(`/profile/${user.name?.replace(/\s+/g, "-")}`);
          }}
        >
          <button className=" text-left">View Profile</button>
        </div>
      )}
    </>
  );
}
