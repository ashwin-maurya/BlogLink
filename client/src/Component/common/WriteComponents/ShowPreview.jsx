import React from "react";
import { useNavigate } from "react-router";
const ShowPreview = ({ blogData }) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex-col  bg-primaryMain group flex  gap-4 text-white  rounded-md p-4 m-3 "
      onClick={() => {
        navigate("/preview");
      }}
    >
      Show Preview
    </button>
  );
};

export default ShowPreview;
