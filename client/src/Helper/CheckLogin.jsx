import { useContext, useEffect } from "react";
import AuthContext from "./Context/AuthContext";

const CheckLogin = () => {
  const context = useContext(AuthContext);

  const { setAuthStatus } = context;
  const {} = context;
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("UserData")) != null) {
      setAuthStatus(true);
    }
  }, []);

  return <></>;
};

export default CheckLogin;
