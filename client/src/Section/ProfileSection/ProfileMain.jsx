import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import EditProfileModal from "./EditProfileModal";
import EditBanner from "./EditBanner";
import { profileDefault } from "../../Assets/icons";
import EditProfileImg from "./EditProfileImg";

export default function ProfileMain({ UserProfile, UserMatch }) {
  const [showProfileModal, setProfileModal] = useState(false);
  const [showBannerModal, setBannerModal] = useState(false);
  const [showProfileImg, setProfileImg] = useState(false);

  const ProfileModalStatus = () => {
    setProfileModal((showProfileModal) => !showProfileModal);
  };

  const BannerModal = () => {
    setBannerModal((showBannerModal) => !showBannerModal);
  };
  const ProfileImg = () => {
    setProfileImg((showProfileImg) => !showProfileImg);
  };
  return (
    <>
      {showProfileModal && (
        <EditProfileModal
          ProfileModalStatus={ProfileModalStatus}
        ></EditProfileModal>
      )}
      {showBannerModal && <EditBanner BannerModal={BannerModal}></EditBanner>}
      {showProfileImg && (
        <EditProfileImg ProfileImg={ProfileImg}></EditProfileImg>
      )}

      <section className="relative block h-[400px] ">
        <div
          className=" w-full h-full bg-center bg-cover bg-[url('https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg')]"
          onClick={BannerModal}
        ></div>
      </section>

      <section className="relative pt-16 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-darkBgPrimary w-full mb-6 shadow-xl rounded-lg -mt-64 p-10">
            <div className="flex flex-wrap justify-center relative">
              <img
                alt="..."
                src={profileDefault}
                className="shadow-xl rounded-full w-56 h-auto align-middle border-none -mt-32 bg-white"
                onClick={ProfileImg}
              />
              {UserMatch && (
                <div className="absolute right-0 top-0">
                  <button
                    className="border-2 border-slate-200 dark:border-gray-700 hover:border-[#e0d1ff] dark:hover:border-[#7eafff] rounded-md bg-primaryMain dark:bg-secondary px-4 py-1 font-semibold text-white"
                    onClick={ProfileModalStatus}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <div className="text-center my-4">
              <h3 className="text-4xl font-semibold leading-normals text-blueGray-700 mb-2 dark:text-darkTextMain">
                {UserProfile?.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex flex-col">
                  <p>{UserProfile?.username}</p>
                </div>
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex flex-col">
                  <p>{UserProfile?.description}</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 break-words w-full max-lg:flex-col">
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain flex flex-col">
                <div className="flex justify-evenly gap-5">
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center">
                      <div className="text-2xl">203</div>
                      <div className="font-bold">Followers</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center">
                      <div className="text-2xl">900</div>
                      <div className="font-bold">Following</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain">
                <div className="flex items-center">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-briefcase  text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold  w-[90%]  ">
                    <p>{UserProfile?.work}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-graduation-cap text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>{UserProfile?.education}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-map-marker text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>{UserProfile?.location}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-calendar-o text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>{UserProfile?.Date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
