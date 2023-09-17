import React, { useState, useEffect, useRef } from "react";
import { headerLogo, hamburger, light, dark } from "../../Assets/icons";
import Search from "./Search";
import ScrollProgress from "./ScrollProgress ";
import { Link } from "react-router-dom";

const BlogNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef = useRef(null);

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
      navbarRef.current.style.top = `-${navbarHeight}px`;
    }
  }, [scrollDirection]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section
        id="navbar"
        ref={navbarRef}
        className="sticky top-0 select-none z-10 transition-all ease-in-out duration-300 delay-75"
      >
        <header className=" dark:bg-darkBgMain  sm:px-2 py-2  w-full  border-b-[1px] border-gray-200 dark:border-darkBorderAll bg-white ">
          <nav className="flex justify-between items-center">
            <div className="flex items-center w-[70%]">
              <Link to="/">
                <img
                  className="m-0 w-[50px] h-[29px]"
                  src={headerLogo}
                  alt="logo"
                />
              </Link>
              <Search />
            </div>
            <div className="flex items-center w-auto">
              <div className="flex gap-2 text-lg leading-normal font-medium max-md:hidden px-4 hover:text-primaryMain dark:text-darkTextMain">
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
        <ScrollProgress />
      </section>
    </>
  );
};

export default BlogNav;
