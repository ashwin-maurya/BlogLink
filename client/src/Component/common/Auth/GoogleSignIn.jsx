import React from "react";
import { GoogleSignInAPI } from "../../../api/AuthAPI";

export default function GoogleSignIn() {
  const goolesignin = async () => {
    let res = await GoogleSignInAPI();
    console.log(res);
    const Input = {
      userEmail: res.user.email,

      useName: res.user.displayName,

      accessToken: res.user.accessToken,
    };

    localStorage.setItem("UserData", JSON.stringify(Input));

    setAuthStatus(true);
    ModalStatus();
    toast.success("Your are loggedin");
  };
}
