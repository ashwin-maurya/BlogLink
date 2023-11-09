import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal";

export default function FeedbackButton() {
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const FeedbackMenu = () => {
    setFeedbackVisible(!feedbackVisible);
  };
  return (
    <>
      {feedbackVisible && (
        <FeedbackModal FeedbackMenu={FeedbackMenu}></FeedbackModal>
      )}

      <span
        onClick={() => {
          FeedbackMenu();
        }}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Feedback
      </span>
    </>
  );
}
