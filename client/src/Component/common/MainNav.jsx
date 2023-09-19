import React, { useState, useEffect, useRef } from "react";
import { headerLogo, hamburger, light, dark } from "../../Assets/icons";
import { navLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { Search, Authentication, SideNav, ScrollProgress } from "./";

const MainNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showModal, setModalOpen] = useState(false);
  const [showNav, setNav] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
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
      navbarRef.current.style.top = `-${navbarHeight}px`;
    }
  }, [scrollDirection]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {showModal && <Authentication closeModal={closeModal}></Authentication>}
      {showNav && (
        <SideNav openModal={openModal} NavStatus={NavStatus}></SideNav>
      )}
      <section
        id="navbar"
        ref={navbarRef}
        className="sticky top-0 select-none z-10 transition-all ease-in-out duration-300 delay-75"
      >
        <header className="flex items-center  border-b-[1px] border-gray-200 dark:border-darkBorderAll  dark:bg-darkBgMain  sm:px-2 py-2 h-[67px] w-full bg-white ">
          <nav className="flex justify-between items-center w-full">
            <div className="flex  items-center w-[70%]">
              <Link to="/">
                <img
                  className="m-0 w-[50px] h-[29px]"
                  src={headerLogo}
                  alt="logo"
                />
              </Link>
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
              <div className="flex gap-2 text-lg leading-normal font-medium max-md:hidden px-4  ">
                <button
                  className="dark:text-darkTextMain hover:text-primaryMain dark:hover:text-secondary"
                  onClick={openModal}
                >
                  Sign In
                </button>
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
            <div className="hidden max-md:block" onClick={NavStatus}>
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

export default MainNav;
