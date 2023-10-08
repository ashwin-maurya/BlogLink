import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
  const host = "http://localhost:5001";
  const [UserDetails, setUserDetails] = useState();
  const [AuthStatus, setAuthStatus] = useState(false);
  const [UserProfile, setUserProfile] = useState();
  const [UserExistStatus, setUserExistStatus] = useState();
  const [loggedin, setLoggedin] = useState({});
  const [loggedinStatus, setLoggedinStatus] = useState(false);

  //Get all notes
  const googlelogin = async (GoogleCreds) => {
    //API call
    const response = await fetch(`${host}/api/auth/googlelogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: GoogleCreds.email,
      }),
    });

    const json = await response.json();
    setLoggedin(json);
    setLoggedinStatus(json.success);
  };

  //Get all notes
  const googlesignup = async (GoogleCreds) => {
    //API call
    const response = await fetch(`${host}/api/auth/googlesignup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: GoogleCreds.name,
        email: GoogleCreds.email,
        username: GoogleCreds.username,
      }),
    });

    const json = await response.json();
    setLoggedin(json);
    setLoggedinStatus(json.success);
  };

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

  const userexist = async (email) => {
    //API call
    const response = await fetch(`${host}/api/auth/userexist?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setUserExistStatus(json.status);
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
        UserExistStatus,
        userexist,
        loggedin,
        setLoggedin,
        googlelogin,
        loggedinStatus,
        setLoggedinStatus,
        setUserExistStatus,
        googlesignup,
        setUserDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
