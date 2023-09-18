import React, { useRef } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

export default function SideNav(props) {
  const { openModal, NavStatus } = props;
  const navRef = useRef(null);
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
        className="backdrop-blur-sm fixed w-screen sidenav h-[100%]  z-40"
      >
        <div className="w-[70%] max-w-[400px] flex justify-evenly h-[100%] bg-white dark:bg-darkBgPrimary shadow-lg overflow-hidden flex-col p-2">
          <ul className="flex-1 flex items-center flex-col">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="w-[100%] border-b-2 border-gray-400"
              >
                <Link
                  to={item.href}
                  className="w-full inline-block text-center font-montserrat leading-normal py-5 text-lg font-semibold dark:hover:text-secondary text-gray-400 hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium">
            <button
              className="w-[100%] inline-block font-montserrat leading-normal font-semibold text-gray-400 dark:text-darkTextMain border-t-2 border-gray-400 hover:text-primaryMain  py-3 dark:hover:text-secondary text-center"
              onClick={openModal}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
