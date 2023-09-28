import React from "react";

import { onLogout } from "../../api/AuthAPI";
import { useState } from "react";

export default function Logout() {
  return (
    <>
      {
        <div className="flex  hover:bg-bgBlue  rounded-md gap-2 text-lg leading-normal font-medium px-4 items-center dark:hover:bg-darkBgMain dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
          <button
            className=""
            onClick={() => {
              onLogout();
              // setloggedStatus(false);

              console.log("hogaya kam");
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
