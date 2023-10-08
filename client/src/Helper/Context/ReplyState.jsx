import React, { useState } from "react";
import ReplyContext from "./ReplyContext";

const ReplyState = (props) => {
  const [reply, setreply] = useState([]);
  return (
    <ReplyContext.Provider
      value={{
        reply,
        setreply,
      }}
    >
      {props.children}
    </ReplyContext.Provider>
  );
};

export default ReplyState;
