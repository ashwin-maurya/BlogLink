import React, { useContext, useState } from "react";
import AuthContext from "../../Helper/Context/AuthContext";

export default function RelevantUpdate() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const context = useContext(AuthContext);
  const { UserDetails, getCurrentUser } = context;
  console.log(selectedOptions);
  const computerScienceOptions = [
    "React Js",
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Artificial Intelligence",
    "Blockchain",
    "Mobile App Development",
    "Database Management",
    "Network Security",
    "Cloud Computing",
    "Front-end Development",
    "Back-end Development",
    "Computer Graphics",
    "Software Engineering",
    "Cybersecurity",
    "IoT (Internet of Things)",
    "Game Development",
    "Data Analytics",
  ];

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userId = UserDetails?._id;
      const response = await fetch(
        `${host}/api/auth/updateRelevant/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("UserData"))
              .authtoken,
          },
          body: JSON.stringify({ relevant: selectedOptions }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Password updated successfully");
        getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full max-lg:w-[90%] h-auto py-5 px-10 flex rounded-lg bg-gray-100 dark:bg-darkBgPrimary shadow-xl flex-col">
        <form
          className="form flex flex-col w-full  px-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="mb-5 text-2xl font-medium text-gray-900 dark:text-white">
            Choose your preferences:
          </h3>
          <ul className="flex flex-wrap gap-3">
            {computerScienceOptions.map((option, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`cs-option-${index}`}
                  value={option}
                  className="hidden peer"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
                <label
                  htmlFor={`cs-option-${index}`}
                  className={`inline-flex items-center justify-between w-full p-2 px-6 text-gray-500 bg-white border-2  rounded-full cursor-pointer hover:border-[#ad81ff] ${
                    selectedOptions.includes(option)
                      ? "peer-checked:bg-primaryMain peer-checked:text-white peer-checked:dark:bg-secondary "
                      : ""
                  } dark:bg-darkBgMain dark:text-white dark:border-darkBgPrimary hover:dark:border-blue-400 `}
                >
                  <div className="w-full text-lg font-semibold text-center">
                    {option}
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <button
              type="submit"
              name="submit"
              className="button-submit my-2 text-white rounded-full p-2 px-6 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
