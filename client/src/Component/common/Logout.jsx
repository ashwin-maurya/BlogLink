import React from "react";
import { useContext } from "react";
import AuthContext from "../../Helper/Context/AuthContext";

export default function Logout() {
  const context = useContext(AuthContext);
  const {
    setAuthStatus,
    setLoggedinStatus,
    setUserExistStatus,
    setUserDetails,
    setLoggedin,
  } = context;
  return (
    <>
      {
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          onClick={() => {
            setAuthStatus(false);
            setLoggedinStatus(false);
            setUserExistStatus();
            setUserExistStatus();
            setUserDetails();
            setLoggedin({});
            localStorage.removeItem("UserData");
            window.location.reload();
          }}
        >
          Sign out
        </a>
      }
    </>
  );
}
