import React, { useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Helper/Context/AuthContext";

export default function EditProfileModal(props) {
  const { ProfileModalStatus } = props;
  const context = useContext(AuthContext);
  const { UserDetails, setUserDetails } = context;
  const ProfilemodalRef = useRef(null);
  const [userDetail, setUserDetail] = useState({
    description: "",
    work: "",
    education: "",
    location: "",
  });

  const handleOutsideClick = (event) => {
    if (ProfilemodalRef.current === event.target) {
      ProfileModalStatus();
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetail((prevuserDetail) => ({
      ...prevuserDetail,
      [name]: value,
    }));
  };
  const host = "http://localhost:5001";

  const handleSubmit = async (event) => {
    const userID = UserDetails._id;
    event.preventDefault();
    const { description, work, education, location } = userDetail;
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const response = await fetch(`${host}/api/auth/adduserdetail`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
        description,
        work,
        education,
        location,
      }),
    });
    const ProfileUpdated = await response.json();
    if (ProfileUpdated) {
      toast.success("Profile Updated");
      setUserDetails({ ...UserDetails, ...ProfileUpdated });
    } else {
      toast.error("ailed!!");
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={ProfilemodalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] h-[95%]  py-5 px-10 flex rounded-lg bg-white dark:bg-darkBgMain shadow-xl flex-col">
          <h1 className="text-xl pb-4   font-bold text-gray-500 tracking-wide">
            Fill Details
          </h1>
          <form
            className="form flex flex-col w-full overflow-y-scroll px-2"
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
            <input
              id="next"
              type="submit"
              value="Register"
              className="button-submit my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
