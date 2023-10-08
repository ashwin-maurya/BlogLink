import { useContext, useEffect } from "react";
import AuthContext from "./Context/AuthContext";

const CheckLogin = () => {
  const context = useContext(AuthContext);

  const { setAuthStatus, getCurrentUser, getCurrentUserDetails } = context;

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("UserData")) != null) {
      setAuthStatus(true);
      getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
    }
  }, []);

  return <></>;
};

export default CheckLogin;
