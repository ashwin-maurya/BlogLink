import { useState } from "react";
import { headerLogo, hamburger, light, dark } from "../../assets/icons";
import Search from "./Search";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 border-2  border-gray-200 bg-white sm:px-2 py-2 z-10 w-full">
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
            <a href="/">Sign in Hellow</a>
          </div>
          <div className="flex gap-2 px-4 text-lg leading-normal font-medium ">
            <button onClick={toggleDarkMode}>
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
