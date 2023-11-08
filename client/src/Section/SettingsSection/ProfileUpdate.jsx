import React, { useRef, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Helper/Context/AuthContext";
import UsernameUpdate from "./UsernameUpdate";
export default function ProfileUpdate() {
  const context = useContext(AuthContext);
  const {
    adduserdetail,
    userDetailExist,
    userdetailexist,
    updateuserdetail,
    UserDetails,
  } = context;

  const [userDetail, setUserDetail] = useState({
    description: "",
    work: "",
    education: "",
    location: "",
  });

  useEffect(() => {
    setUserDetail({
      description: UserDetails?.description || "",
      work: UserDetails?.work || "",
      education: UserDetails?.education || "",
      location: UserDetails?.location || "",
    });
  }, [UserDetails]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail((prevuserDetail) => ({
      ...prevuserDetail,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    userdetailexist();
  };
  useEffect(() => {
    if (userDetailExist) {
      updateuserdetail(userDetail);
    } else if (userDetailExist == false) {
      adduserdetail(userDetail);
    }
  }, [userDetailExist]);
  return (
    <>
      <div className="w-full h-auto  py-5 px-10 max-lg:px-2 flex rounded-lg bg-gray-100 dark:bg-darkBgPrimary shadow-xl flex-col">
        <h1 className="text-xl pb-2   font-bold text-gray-500 tracking-wide">
          Fill Details
        </h1>
        <form
          className="form flex flex-col w-full px-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label
            className="text-sm font-bold text-gray-500 tracking-wide mt-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            placeholder="Description"
            name="description"
            className="border border-gray-300 bg-transparent dark:text-darkTextPrimary h-[200px] rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
            value={userDetail.description}
            onChange={handleInputChange}
          ></textarea>
          <label
            className="text-sm font-bold text-gray-500 tracking-wide mt-2"
            htmlFor="work"
          >
            Work
          </label>
          <input
            type="text"
            placeholder="Work"
            name="work"
            autoComplete="on"
            value={userDetail.work}
            onChange={handleInputChange}
            className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
          />
          <label
            className="text-sm font-bold text-gray-500 tracking-wide mt-2"
            htmlFor="education"
          >
            Education
          </label>
          <input
            type="text"
            placeholder="Education"
            name="education"
            autoComplete="on"
            value={userDetail.education}
            onChange={handleInputChange}
            className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
          />
          <label
            className="text-sm font-bold text-gray-500 tracking-wide mt-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            autoComplete="on"
            value={userDetail.location}
            onChange={handleInputChange}
            className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
          />
          <div>
            <input
              id="next"
              type="submit"
              value="Submit"
              className="button-submit my-2 text-white rounded-full p-2 px-6 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
            />
          </div>
        </form>
        <UsernameUpdate />
      </div>
    </>
  );
}
