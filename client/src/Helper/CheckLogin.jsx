import { useContext, useEffect } from "react";
import AuthContext from "./Context/AuthContext";

const CheckLogin = () => {
  const context = useContext(AuthContext);
  const { User, setUser } = context;
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("UserData")) != null) {
      setUser(JSON.parse(localStorage.getItem("UserData")));
    }
  }, []);

  return <></>;
};

export default CheckLogin;
