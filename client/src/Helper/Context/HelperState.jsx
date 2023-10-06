import React, { useState } from "react";
import HelperContext from "./HelperContext";

const HelperState = (props) => {
  const [date, setdate] = useState("");
  const formatUTCDate = (utcDateString) => {
    const date = new Date(utcDateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setdate(date.toLocaleString("en-US", options));
  };

  return (
    <HelperContext.Provider value={{ formatUTCDate, date }}>
      {props.children}
    </HelperContext.Provider>
  );
};

export default HelperState;
