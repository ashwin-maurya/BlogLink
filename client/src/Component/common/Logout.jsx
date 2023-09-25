import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Logout() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
<<<<<<< HEAD
        <div className="flex hover:bg-slate-100 rounded-md gap-2 text-lg leading-normal font-medium px-4 items-center dark:hover:bg-darkBgMain dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
=======
        <div className="flex  hover:bg-bgBlue  rounded-md gap-2 text-lg leading-normal font-medium px-4 items-center dark:hover:bg-darkBgMain dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary">
>>>>>>> dc
          <button className="" onClick={() => logout()}>
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}
