import React, { useState } from "react";
import ClientContext from "./ClientContext";

const clientState = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <ClientContext.Provider value={{ showEdit, display }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default clientState;
