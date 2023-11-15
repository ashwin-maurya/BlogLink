import React, { useState, useEffect, useRef, useContext } from "react";
import { light, dark } from "../../Assets/icons";
import Cookies from "js-cookie";
import { navLinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, SideNav, ScrollProgress, Login, Profile } from "./";
import TopicBar from "../SingleBlogComponents/TopicBar";
import AuthContext from "../../Helper/Context/AuthContext";
import BlogLinkLogo from "./BlogLinkLogo";
TopicBar;
const MainNav = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setNav] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const context = useContext(AuthContext);
  const { User, UserDetails, getCurrentUser } = context;
  const func = async () => {
    await getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
  };
  // console.log(UserDetails);

  useEffect(() => {
    User && func();
  }, []);
  const NavStatus = () => {
    setNav((showNav) => !showNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight;
    if (scrollDirection === "up") {
      navbarRef.current.style.top = "0";
    } else {
      navbarRef.current.style.top = `-${navbarHeight + 1}px`;
    }
  }, [scrollDirection]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    Cookies.set("darkMode", newDarkMode ? "true" : "false", { expires: 1 });
    document.body.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    const darkModeCookie = Cookies.get("darkMode");
    if (darkModeCookie === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <>
      {showNav && <SideNav NavStatus={NavStatus}></SideNav>}
      <section
        id="navbar"
        ref={navbarRef}
        className="sticky top-0 select-none z-50 transition-all ease-in-out duration-300"
      >
        <header className="flex items-center border-b border-gray-100 dark:border-darkBorderAll  dark:bg-darkBgMain  h-[55px] w-full bg-white ">
          <BlogLinkLogo />
          <nav className="flex justify-between items-center w-full">
            <div className="flex  items-center w-[70%]">
              {location.pathname === "/blog" ? (
                <Search />
              ) : (
                <ul className="flex-1 flex items-center gap-8 max-md:hidden ml-5 ">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="font-montserrat leading-normal py-5 text-lg font-semibold dark:hover:text-secondary hover:text-primaryMain text-slate-gray dark:text-darkTextMain"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center w-auto">
              <button
                onClick={() => {
                  toggleDarkMode();
                }}
                className="w-10 h-10 mr-2 max-sm:mr-1"
              >
                {darkMode ? (
                  <img src={dark} alt="dark" />
                ) : (
                  <img src={light} alt="light" />
                )}
              </button>
              <div className="max-md:hidden ">
                <Login />
              </div>
              <div className="hidden max-md:block" onClick={NavStatus}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={`${darkMode ? "white" : "black"}`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="m-0 w-[55px] h-[35px]"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
            </div>
          </nav>
        </header>

        <ScrollProgress />
        {/* {location.pathname.includes("blogs") && <TopicBar></TopicBar>} */}
      </section>
    </>
  );
};

export default MainNav;
