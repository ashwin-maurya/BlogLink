import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5001";
  const [UserDetails, setUserDetails] = useState();
  const [AuthStatus, setAuthStatus] = useState(false);
  const [UserProfile, setUserProfile] = useState();

  //Get all notes
  const getCurrentUser = async (id) => {
    //API call
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
  };

  const getUser = async (username) => {
    //API call
    const response = await fetch(
      `${host}/api/auth/getuser?username=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setUserProfile(json);
  };

  return (
    <AuthContext.Provider
      value={{
        UserDetails,
        getCurrentUser,
        AuthStatus,
        setAuthStatus,
        getUser,
        UserProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
