import { useRef, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";

export default function ShareModal({ sharemodal, currentUrl }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      sharemodal();
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={modalRef}
        onClick={handleOutsideClick}
      >
        <div className="max-lg:w-[90%] w-[35%] flex rounded-lg h-auto shadow-xl">
          <div className="bg-white dark:bg-darkBgPrimary w-full p-4 px-6 rounded-xl ">
            <div className="flex justify-between items center border-b border-gray-200  dark:border-gray-300  py-3">
              <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800 dark:text-white">
                  Share Modal
                </p>
              </div>
            </div>

            <div className="my-4">
              <p className="text-sm text-gray-800 dark:text-white">
                Share this link via
              </p>

              <div className="flex justify-around my-4">
                <FacebookShareButton url={currentUrl}>
                  <div className="border w-12 h-12 border-blue-200 hover:bg-blue-200 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fa fa-facebook text-[#1877f2]"></i>
                  </div>
                </FacebookShareButton>

                <WhatsappShareButton url={currentUrl}>
                  <div className="border w-12 h-12 border-green-200 hover:bg-green-200 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fa fa-whatsapp text-[#25D366]"></i>
                  </div>
                </WhatsappShareButton>

                <TwitterShareButton url={currentUrl}>
                  <div className="border w-12 h-12  border-blue-200 hover:bg-blue-200 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fa fa-twitter text-[#1d9bf0]"></i>
                  </div>
                </TwitterShareButton>

                <TelegramShareButton url={currentUrl}>
                  <div className="border w-12 h-12 border-sky-200 hover:bg-sky-200 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fa fa-telegram text-[#229ED9]"></i>
                  </div>
                </TelegramShareButton>

                <LinkedinShareButton url={currentUrl}>
                  <div className="border w-12 h-12 border-indigo-200 hover:bg-indigo-200 rounded-full flex items-center justify-center cursor-pointer">
                    <i className="fa fa-linkedin text-[#0077B5]"></i>
                  </div>
                </LinkedinShareButton>
              </div>

              <p className="text-sm text-gray-800 dark:text-white">
                Or copy link
              </p>
              <div className="border-2 border-gray-200 dark:border-gray-300 flex justify-between items-center mt-4 py-2">
                <i className="fa fa-link text-gray-800 dark:text-white px-3"></i>
                <input
                  className="w-full outline-none bg-transparent text-gray-800 dark:text-white"
                  type="text"
                  placeholder="link"
                  defaultValue={currentUrl}
                />

                <button className="bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
