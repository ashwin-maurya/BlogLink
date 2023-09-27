import React from "react";
import { useNavigate } from "react-router";

export default function ViewProfile() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex gap-2 py-1 hover:bg-bgBlue rounded-md text-lg leading-normal font-medium px-4 items-center dark:text-darkTextMain dark:hover:bg-darkBgMain  hover:text-primaryMain  dark:hover:text-secondary"
        onClick={() => {
          navigate(
            `/profile/${localStorage.getItem("userName")?.replace(/\s+/g, "-")}`
          );
        }}
      >
        <button className=" text-left">View Profile</button>
      </div>
    </>
  );
}
