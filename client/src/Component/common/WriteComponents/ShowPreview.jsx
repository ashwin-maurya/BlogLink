import React from "react";
import { useNavigate } from "react-router";
const ShowPreview = ({ blogData }) => {
  const navigate = useNavigate();

  return (
    <button
      className="border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400   rounded-md bg-primaryMain dark:bg-secondary px-4 py-1 font-semibold text-white"
      onClick={() => {
        navigate("/preview");
      }}
    >
      Show Preview
    </button>
  );
};

export default ShowPreview;
