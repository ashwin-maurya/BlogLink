import React from "react";
import ProfileUpdate from "./ProfileUpdate";
import RelevantUpdate from "./RelevantUpdate";
import AccountUpdate from "./AccountUpdate";
import SocialUpdate from "./SocialUpdate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Rightsection() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProfileUpdate></ProfileUpdate>} />{" "}
        <Route
          exact
          path="/ProfileUpdate"
          element={<ProfileUpdate></ProfileUpdate>}
        />{" "}
        <Route
          exact
          path="/ResetPassword"
          element={<AccountUpdate></AccountUpdate>}
        />{" "}
        <Route
          exact
          path="/SocialUpdate"
          element={<SocialUpdate></SocialUpdate>}
        />{" "}
        <Route
          exact
          path="/RelevantUpdate"
          element={<RelevantUpdate></RelevantUpdate>}
        />{" "}
      </Routes>
    </>
  );
}
