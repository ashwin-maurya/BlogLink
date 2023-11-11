import { useState, useContext } from "react";
import AuthContext from "../../../Helper/Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register({
  setSign,
  ModalStatus,
  setAuthStatus,
  RelevantModalStatus,
}) {
  const context = useContext(AuthContext);
  const { adduserdetail, getCurrentUser } = context;

  const [Registercreds, setRegistercreds] = useState({
    email: "",
    password: "",
    name: "",
  });
  const host = "http://localhost:5001";

  const RegisterOnchange = (e) => {
    setRegistercreds({
      ...Registercreds,
      [e.target.name]: e.target.value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();
    const { name, password, email } = Registercreds;
    const parts = email.split("@");
    const username = parts[0];
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("UserData", JSON.stringify(json));

      setAuthStatus(true);
      toast.success("Registered Successfully");

      adduserdetail({
        username: json.username,
        description: "",
        work: "",
        education: "",
        location: "",
        profileImg: "",
        bannerImg: "",
        socialLinks: {
          github: "",
          linkedin: "",
          instagram: "",
          twitter: "",
        },
      });
      getCurrentUser(JSON.parse(localStorage.getItem("UserData")).UserID);
      RelevantModalStatus();
      ModalStatus();
    } else {
      toast.error("Can't Register");
    }
  };
  return (
    <>
      <div className="container flex flex-col justify-center items-center max-sm:p-5 p-10 max-lg:py-20 max-lg:px-20 w-[50%] max-lg:w-[90%]">
        <p className="font-bold text-black dark:text-darkTextMain">Sign Up</p>

        <button
          className="button flex items-center border-2  border-gray-300 rounded-full dark:text-darkTextMain p-4 my-4  w-full"
          onClick={() => goolesignin()}
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
            placeholder="Name"
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
            onClick={() => setSign(true)}
          >
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}
