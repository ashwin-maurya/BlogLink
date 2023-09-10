import { headerLogo, hamburger } from "../../assets/icons";
import Search from "./Search";
const Nav = () => {
  return (
    <header className="sm:padding-x py-2  z-10 w-full border-2 border-gray-300 ">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img className="m-0 w-[50px] h-[29px]" src={headerLogo} alt="logo" />
        </a>
        <Search />
        <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden">
          <a href="/">Sign in</a>
        </div>
        <div className="hidden max-lg:block">
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
