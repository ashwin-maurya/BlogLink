import React, { useContext, useEffect } from "react";
import AuthContext from "./Context/AuthContext";

const GetUseDetails = () => {
  const context = useContext(AuthContext);
  const { User, UserDetails, getCurrentUser } = context;

  useEffect(() => {
    User && func();
  }, []);
  const func = async () => {
    console.log("I ran");
    await getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
    console.log(UserDetails);
    console.log("Auth");
  };
};

export default GetUseDetails;
