import React from "react";
import { useNavigate } from "react-router";

const SaveasDraft = ({ setblogContent, blogContent }) => {
  const navigate = useNavigate();
  const handle = () => {
    setblogContent({ ...blogContent, preview: true });
  };
  return (
    <button
      className="flex-col bg-primaryMain  group flex text-white  gap-4  rounded-md p-4 m-3  "
      onClick={handle}
    >
      Save as Draft
    </button>
  );
};

export default SaveasDraft;
