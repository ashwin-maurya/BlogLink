import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {!isAuthenticated && (
        <div
          className="flex gap-2 text-lg leading-normal font-medium  px-4"
          onClick={() => loginWithRedirect()}
        >
          <button
            className="dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary"
            // onClick={openModal}
          >
            Sign In
          </button>
        </div>
      )}
    </>
  );
}
