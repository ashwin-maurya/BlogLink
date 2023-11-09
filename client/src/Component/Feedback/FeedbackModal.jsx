import { useRef, useEffect, useContext, useState } from "react";

export default function FeedbackModal({ FeedbackMenu }) {
  const modalRef = useRef(null);
  const [feedbackData, setFeedbackData] = useState({
    feedbackType: "",
    feedbackText: "",
    rating: 0,
  });

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      FeedbackMenu();
    }
  };

  const handleInputChange = (field, value) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFeedbackSubmit = async () => {
    try {
      // Exclude 'rating' field if feedbackType is 'review'
      const payload =
        feedbackData.feedbackType === "review"
          ? {
              userID: feedbackData.userID,
              type: feedbackData.feedbackType,
              description: feedbackData.feedbackText,
            }
          : feedbackData;
      const obj = JSON.parse(localStorage.getItem("UserData"));

      const response = await fetch(
        "http://localhost:5001/api/feedback/submitFeedback",
        {
          method: "POST",
          headers: {
            "auth-token": obj.authtoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("Server response:", result);

      setFeedbackData({
        feedbackType: "",
        feedbackText: "",
        rating: 0,
      });

      FeedbackMenu();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-49 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] flex rounded-lg h-auto bg-white dark:bg-darkBgMain shadow-xl">
          <form className="p-4 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Feedback Form
            </h2>

            <div className="mb-4">
              <label
                htmlFor="feedbackType"
                className="block text-sm font-semibold text-gray-600 dark:text-white"
              >
                Feedback Type
              </label>
              <select
                id="feedbackType"
                className="w-full border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain dark:bg-darkBgMain"
                value={feedbackData.feedbackType}
                onChange={(e) =>
                  handleInputChange("feedbackType", e.target.value)
                }
              >
                <option value="" disabled>
                  Select feedback type
                </option>
                <option value="complaint">Complaint</option>
                <option value="review">Review</option>
                <option value="bug">Report a Bug</option>
              </select>
            </div>

            {feedbackData.feedbackType === "review" && (
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-semibold text-gray-600 dark:text-white"
                >
                  Rating (1 to 5)
                </label>
                <input
                  type="number"
                  id="rating"
                  className="w-full border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                  value={feedbackData.rating}
                  onChange={(e) =>
                    handleInputChange("rating", Number(e.target.value))
                  }
                  min="1"
                  max="5"
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="feedbackText"
                className="block text-sm font-semibold text-gray-600 dark:text-white "
              >
                Feedback Details
              </label>
              <textarea
                id="feedbackText"
                className="w-full border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                value={feedbackData.feedbackText}
                onChange={(e) =>
                  handleInputChange("feedbackText", e.target.value)
                }
                rows="4"
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-primaryMain text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleFeedbackSubmit}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
