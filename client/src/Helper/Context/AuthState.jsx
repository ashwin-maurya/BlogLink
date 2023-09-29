import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5001";
  const [UserDetails, setUserDetails] = useState();
  const [AuthStatus, setAuthStatus] = useState(false);

  //Get all notes
  const getCurrentUser = async (id) => {
    //API call
    console.log("hello");
    const response = await fetch(`${host}/api/auth/getCurrentuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("UserData")).authtoken,
      },
      user: id,
    });

    const json = await response.json();
    setUserDetails(json);
    console.log(json);
    console.log("form getcurrentUser");
  };

  return (
    <AuthContext.Provider
      value={{ UserDetails, getCurrentUser, AuthStatus, setAuthStatus }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
