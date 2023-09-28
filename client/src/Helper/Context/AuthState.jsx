import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5001";
  const [User, setUser] = useState();
  const [UserDetails, setUserDetails] = useState();

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
      value={{ UserDetails, setUser, User, getCurrentUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
