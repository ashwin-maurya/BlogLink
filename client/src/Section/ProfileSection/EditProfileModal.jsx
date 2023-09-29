import { useRef } from "react";

export default function EditProfileModal(props) {
  const { ProfileModalStatus } = props;

  const ProfilemodalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (ProfilemodalRef.current === event.target) {
      ProfileModalStatus();
    }
  };
  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm"
        ref={ProfilemodalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] flex rounded-lg bg-white dark:bg-darkBgMain shadow-xl overflow-hidden">
          <form action="">
            <form className="form flex flex-col  w-full">
              <input
                type="text"
                placeholder="Name"
                name="name"
                autocomplete="on"
                className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                autocomplete="on"
                className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
              />
              <input
                type="password"
                name="password"
                autocomplete="on"
                placeholder="Password"
                className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-300 bg-transparent dark:text-darkTextPrimary rounded-md p-2 mb-2 focus:outline-none dark:focus:border-secondary focus:border-primaryMain"
              />
              <input
                id="next"
                type="submit"
                value="Register"
                className="button-submit  my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
              />
            </form>
          </form>
        </div>
      </div>
    </>
  );
}
