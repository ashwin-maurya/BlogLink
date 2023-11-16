import React, { useRef, useContext } from "react";
import { navLinks } from "../constants";
import { Login, Logout } from "../common";
import { Link } from "react-router-dom";
import AuthContext from "../../Helper/Context/AuthContext";
import { Profile } from "../common";
import { useNavigate } from "react-router";
import FeedbackButton from "../Feedback/FeedbackButton";
import Signin from "./Signin";
import { profileDefault } from "../../Assets/icons";
export default function SideNav(props) {
  const { NavStatus } = props;
  const navRef = useRef(null);
  const context = useContext(AuthContext);
  const { AuthStatus, UserDetails } = context;
  const navigate = useNavigate();

  const handleOutsideClick = (event) => {
    if (navRef.current === event.target) {
      NavStatus();
    }
  };

  return (
    <>
      <div
        id="mySidenav"
        ref={navRef}
        onClick={handleOutsideClick}
        className="backdrop-blur-sm fixed w-screen sidenav bg-Opacitywhite h-[100%]  z-[51]"
      >
        <div className="w-[70%] max-w-[400px] flex justify-evenly h-[100%] bg-white shadow-lg overflow-hidden dark:bg-darkBgMain flex-col">
          {AuthStatus && (
            <div
              className="flex justify-center items-center  py-2"
              onClick={() => {
                navigate(
                  `/profile/${UserDetails.username?.replace(/\s+/g, "-")}`,
                  {}
                );
                NavStatus();
              }}
            >
              <div className="flex items-center py-2 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white">
                <img
                  src={
                    UserDetails?.profileImg !== ""
                      ? UserDetails?.profileImg
                      : profileDefault
                  }
                  alt=""
                  className="rounded-full h-10 w-10 mr-2 object-cover object-top"
                />
                <span className="text-xl">{UserDetails?.name}</span>
              </div>
            </div>
          )}

          <ul className="flex-1 flex items-center flex-col">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="w-[100%] bg-bgBlue  dark:bg-darkBgPrimary"
              >
                <Link
                  to={item.href}
                  onClick={NavStatus} // Call NavStatus when a nav link is clicked
                  className="w-full inline-block text-center font-montserrat  py-4 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="w-[100%] bg-bgBlue  dark:bg-darkBgPrimary">
              <Link
                to="/settings"
                onClick={NavStatus}
                className="w-full inline-block text-center font-montserrat  py-4 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
              >
                Settings
              </Link>
            </li>
            <li className="w-[100%] bg-bgBlue  dark:bg-darkBgPrimary">
              <span
                onClick={() => {
                  navigate(`/bookmarks`, {
                    state: {
                      userID: UserDetails?.userID,
                    },
                  });
                  NavStatus();
                }}
                className="w-full inline-block text-center font-montserrat  py-4 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
              >
                Bookmarks
              </span>
            </li>

            <li className="w-[100%] bg-bgBlue  dark:bg-darkBgPrimary">
              <span className="w-full inline-block text-center font-montserrat  py-2 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain">
                <FeedbackButton />
              </span>
            </li>
          </ul>
          <div className="flex gap-2 text-lg  py-4 dark:bg-darkBgPrimary  text-gray-400 justify-center font-medium  bg-bgBlue ">
            {!AuthStatus ? (
              <Signin />
            ) : (
              <>
                <Logout />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
