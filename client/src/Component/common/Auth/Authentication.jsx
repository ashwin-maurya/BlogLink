import { useRef, useState, useContext, useEffect } from "react";
import { auth } from "../../../Assets/images";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../Helper/Context/AuthContext";
import Login from "./Login";
import Register from "./Register";

export default function Authentication(props) {
  const context = useContext(AuthContext);
  const { setAuthStatus } = context;

  const { ModalStatus } = props;
  const modalRef = useRef(null);
  const [sign, setSign] = useState(true);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      ModalStatus();
    }
  };

  // GOOGLE LOGIN HERE----------------------------------------------------------------------------------------------

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
            <Login
              ModalStatus={ModalStatus}
              setAuthStatus={setAuthStatus}
              setSign={setSign}
            />
          ) : (
            <Register
              ModalStatus={ModalStatus}
              setAuthStatus={setAuthStatus}
              setSign={setSign}
            />
          )}
        </div>
      </div>
    </>
  );
}
