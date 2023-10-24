import React, { useRef, useContext } from "react";
import { navLinks } from "../constants";
import { Login, Logout } from "../common";
import { Link } from "react-router-dom";
import AuthContext from "../../Helper/Context/AuthContext";
import { Profile } from "../common";
import { useNavigate } from "react-router";

import Signin from "./Signin";
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
        className="backdrop-blur-sm fixed w-screen sidenav h-[100%]  z-[51]"
      >
        <div className="w-[70%] max-w-[400px] flex justify-evenly h-[100%] bg-white dark:bg-darkBgPrimary shadow-lg overflow-hidden flex-col p-2">
          {AuthStatus && (
            <div
              className="flex justify-center items-center  pt-2 pb-4 "
              onClick={() => {
                navigate(
                  `/profile/${UserDetails.username?.replace(/\s+/g, "-")}`,
                  {}
                );
                NavStatus();
              }}
            >
              <Profile
                profileImg={
                  UserDetails?.profileImg !== ""
                    ? UserDetails?.profileImg
                    : profileDefault
                }
                name={UserDetails?.username}
              ></Profile>
            </div>
          )}

          <ul className="flex-1 flex items-center flex-col">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="w-[100%] bg-bgBlue dark:bg-darkBgMain rounded-lg my-1"
              >
                <Link
                  to={item.href}
                  onClick={NavStatus} // Call NavStatus when a nav link is clicked
                  className="w-full inline-block text-center font-montserrat leading-normal py-4 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal py-4 text-gray-400 justify-center font-medium  bg-bgBlue dark:bg-darkBgMain rounded-lg">
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
