import React from "react";
import { useContext } from "react";
import AuthContext from "../../Helper/Context/AuthContext";

export default function Logout() {
  const context = useContext(AuthContext);
  const { setAuthStatus } = context;
  return (
    <>
      {
        <div className="flex  hover:bg-bgBlue  rounded-md gap-2 text-lg leading-normal font-medium px-4 items-center dark:hover:bg-darkBgMain dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
          <button
            className=""
            onClick={() => {
              setAuthStatus(false);
              localStorage.removeItem("UserData");
            }}
          >
            Sign Out
          </button>
        </div>
      }
    </>
  );
}
