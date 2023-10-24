import React, { useRef } from "react";
import RelevantUpdate from "../../../Section/SettingsSection/RelevantUpdate";
export default function RelevantModal(props) {
  const { RelevantModalStatus } = props;
  const relevantModalRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (relevantModalRef.current === event.target) {
      RelevantModalStatus();
    }
  };
  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={relevantModalRef}
        onClick={handleOutsideClick}
      >
        <div className="w-[70%] max-lg:w-[90%] flex rounded-lg h-auto bg-white dark:bg-darkBgPrimary shadow-xl ">
          <RelevantUpdate
            RelevantModalStatus={RelevantModalStatus}
            firstSignUp={true}
          />
        </div>
      </div>
    </>
  );
}
