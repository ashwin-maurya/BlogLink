import { useRef, useEffect, useContext, useState } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { profileDefault } from "../../Assets/icons";
import { chevronRight } from "../../Assets/icons";
export default function ProfileModal({ profileMenu }) {
  const modalRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const { UserDetails } = context;

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      profileMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos < currentScrollPos) {
        profileMenu();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, profileMenu]);

  return (
    <>
      <div
        id="myModal"
        className="fixed z-49 inset-0 transition-all ease-in-out duration-300 "
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div
          id="dropdownAvatarName"
          className="z-10 block absolute right-1 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-darkBgPrimary dark:divide-gray-600 border dark:border-gray-600"
        >
          <div
            className="px-4 py-3 text-sm text-gray-900 dark:text-white"
            onClick={() => {
              navigate(
                `/profile/${UserDetails.username?.replace(/\s+/g, "-")}`,
                {}
              );
              profileMenu();
            }}
          >
            <img
              src={
                UserDetails?.profileImg != ""
                  ? UserDetails?.profileImg
                  : profileDefault
              }
              alt=""
              className="rounded-full h-10 w-10 mr-2"
            />
            <div
              className="truncate text-lg mt-2 font-semibold flex hover:text-primaryMain"
              onClick={profileMenu}
            >
              {" "}
              {UserDetails?.name}
              <img src={chevronRight} className="" />
            </div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <span
                to="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  navigate(`/bookmarks`, {
                    state: {
                      userID: UserDetails?.userID,
                    },
                  });
                  profileMenu();
                }}
              >
                Bookmarks
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate(`/settings`, {});
                  profileMenu();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </span>
            </li>
          </ul>
          <div className="py-2">
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}
