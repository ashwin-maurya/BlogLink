import React, { useContext, useEffect } from "react";
import AuthContext from "../Helper/Context/AuthContext";
import Leftsection from "../Section/SettingsSection/Leftsection";
import Rightsection from "../Section/SettingsSection/Rightsection";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const context = useContext(AuthContext);
  const { getCurrentUser } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("UserData"))) {
      navigate("/");
    } else {
      getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
    }
  });
  return (
    <>
      <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
        <div className="relative w-[30%]  overflow-hidden  max-lg:w-[100%]">
          <Leftsection />
        </div>
        <div className="w-[70%] max-lg:w-[100%] border-r-[1px] dark:border-darkBorderAll max-lg:border-0  border-bgBlue p-6">
          <Rightsection />
        </div>
      </section>
    </>
  );
}
