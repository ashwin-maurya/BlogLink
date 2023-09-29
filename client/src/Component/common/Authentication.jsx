import { useRef, useState, useContext, useEffect } from "react";
import { auth } from "../../Assets/images";
import { GoogleSignInAPI } from "../../api/AuthAPI";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Helper/Context/AuthContext";

export default function Authentication(props) {

  const context = useContext(AuthContext);
  const { setAuthStatus } = context;


  const host = "http://localhost:5001";
  const [Registercreds, setRegistercreds] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [Logincreds, setLogincreds] = useState({ email: "", password: "" });

  const { ModalStatus } = props;
  const modalRef = useRef(null);
  const [sign, setSign] = useState(true);
  const singUp = () => {
    setSign(false);
  };

  const signIn = () => {
    setSign(true);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      ModalStatus();
    }
  };

  // LOGIN HERE-------------------------------------------------------------------------------------------------
  const login = async (e) => {
    e.preventDefault();
    console.log("Login");
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Logincreds.email,
        password: Logincreds.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("UserData", JSON.stringify(json));

      ModalStatus();
      setAuthStatus(true);

      toast.success("Account Loggedin Succesfully");
    } else {
      toast.error("Invalid Credentials");
    }

    console.log("form Register");

  };
  // GOOGLE LOGIN HERE----------------------------------------------------------------------------------------------

  const goolesignin = async () => {
    let res = await GoogleSignInAPI();
    console.log(res);
    const Input = {
      userEmail: res.user.email,

      useName: res.user.displayName,

      accessToken: res.user.accessToken,
    };

    localStorage.setItem("UserData", JSON.stringify(Input));

    setAuthStatus(true);
    ModalStatus();
    toast.success("Your are loggedin");
  };

  // REGISTER HERE----------------------------------------------------------------------------------------------

  const Register = async (e) => {
    e.preventDefault();
    console.log("Register");
    const { name, password, email } = Registercreds;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        //   'auth-token':localStorage.getItem("accessToken") ,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("UserData", JSON.stringify(json));
      setAuthStatus(true);

      ModalStatus();
      toast.success("Registered Successfully");
    } else {
      toast.error("Can't Register");
    }

  };

  // ONCHANGE
  const RegisterOnchange = (e) => {
    setRegistercreds({
      ...Registercreds,
      [e.target.name]: e.target.value,
    });
  };
  const LoginOnchange = (e) => {
    setLogincreds({
      ...Logincreds,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] flex rounded-lg bg-white dark:bg-darkBgPrimary shadow-xl overflow-hidden">
          <div className="flex items-center w-[50%] h-[auto]  bg-[#d1e3ff] dark:bg-[#ffd4bb] max-lg:hidden">
            <img src={auth} alt="girl-reading-a-book" />
          </div>

          {sign ? (
            <div className="container flex flex-col justify-center items-center max-sm:p-5 p-10 max-lg:py-20 max-lg:px-20 w-[50%] max-lg:w-[90%]">
              <p className="font-bold text-black dark:text-darkTextMain">
                Sign In
              </p>

              <button
                className="button flex items-center border-2  border-gray-300 rounded-full dark:text-darkTextMain p-4 my-4  w-full"
                onClick={goolesignin}
              >
                <img
                  src="https://img.icons8.com/color/48/undefined/google-logo.png"
                  alt="google logo"
                  className="img pr-2 h-[30px]"
                />
                <p className="font-bold">Sign in with Google</p>
              </button>

              <p className="my-2 dark:text-darkTextMain  text-center w-full mb-5">
                or
              </p>
              <form className="form flex flex-col  w-full">
                <input
                  value={Logincreds.email}
                  onChange={LoginOnchange}
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  type="password"
                  value={Logincreds.password}
                  onChange={LoginOnchange}
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary  rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  id="next"
                  type="submit"
                  value="Sign in"
                  onClick={login}
                  className="button-submit  my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
                />
                <input
                  id="forgot"
                  type="submit"
                  value="Forgot Password ?"
                  className="button-submit bg-white border border-gray-300 rounded-full p-2 my-5 hover:bg-gray-200 cursor-pointer"
                />
              </form>
              <p
                id="signup"
                className="text-gray-500 dark:text-darkTextPrimary text-sm mt-2"
              >
                Don't have an account ?{" "}
                <a
                  href="#"
                  className="text-primaryMain dark:text-secondary font-semibold"
                  onClick={singUp}
                >
                  Sign up
                </a>
              </p>
            </div>
          ) : (
            <div className="container flex flex-col justify-center items-center max-sm:p-5 p-10 max-lg:py-20 max-lg:px-20 w-[50%] max-lg:w-[90%]">
              <p className="font-bold text-black dark:text-darkTextMain">
                Sign Up
              </p>

              <button
                className="button flex items-center border-2  border-gray-300 rounded-full dark:text-darkTextMain p-4 my-4  w-full"
                onClick={GoogleSignInAPI}
              >
                <img
                  src="https://img.icons8.com/color/48/undefined/google-logo.png"
                  alt="google logo"
                  className="img pr-2 h-[30px]"
                />
                <p className="font-bold">Sign Up with Google</p>
              </button>

              <p className="my-2 dark:text-darkTextMain  text-center w-full mb-5">
                or
              </p>
              <form className="form flex flex-col  w-full">
                <input
                  type="text"
                  placeholder="UserName"
                  value={Registercreds.name}
                  onChange={RegisterOnchange}
                  name="name"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={Registercreds.email}
                  onChange={RegisterOnchange}
                  name="email"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  type="password"
                  value={Registercreds.password}
                  onChange={RegisterOnchange}
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
                />
                <input
                  onClick={Register}
                  id="next"
                  type="submit"
                  value="Register"
                  className="button-submit  my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
                />
              </form>
              <p
                id="signup"
                className="text-gray-500 dark:text-darkTextPrimary text-sm mt-2"
              >
                Have an account ?{" "}
                <a
                  href="#"
                  className="text-primaryMain dark:text-secondary font-semibold"
                  onClick={signIn}
                >
                  Sign in
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
