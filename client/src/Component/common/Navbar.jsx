import React, { useState, useEffect } from "react";
import { headerLogo, hamburger, light, dark } from "../../Assets/icons";
import Search from "./Search";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; // Updated here
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
    if (scrollDirection === "up") {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
  }, [scrollDirection]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      id="navbar"
      className="sticky top-0 border-2 border-t-0 select-none dark:bg-slate-600 transition-all ease-in-out duration-300 delay-75  border-gray-200 bg-white sm:px-2 py-2 z-10 w-full"
    >
      <nav className="flex justify-between items-center">
        <div className="flex items-center w-[70%]">
          <a href="/">
            <img
              className="m-0 w-[50px] h-[29px]"
              src={headerLogo}
              alt="logo"
            />
          </a>
          <Search />
        </div>
        <div className="flex items-center w-auto">
          <div className="flex gap-2 text-lg leading-normal font-medium max-md:hidden px-4 hover:text-blue-600">
            <a href="/">Sign in</a>
          </div>
          <div className="flex gap-2 px-4 text-lg leading-normal font-medium ">
            <button
              onClick={() => {
                toggleDarkMode();
                document.body.classList.toggle("dark");
              }}
            >
              {darkMode ? (
                <img src={dark} alt="dark" />
              ) : (
                <img src={light} alt="light" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden max-md:block">
          <img
            src={hamburger}
            className="m-0 w-[50px] h-[29px]"
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
