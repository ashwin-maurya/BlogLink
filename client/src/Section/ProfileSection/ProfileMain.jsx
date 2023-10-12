import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import EditProfileModal from "./EditProfileModal";
import EditBanner from "./EditBanner";
import { profileDefault } from "../../Assets/icons";
import EditProfileImg from "./EditProfileImg";
import { uploadBannerImage, uploadImage } from "../../api/ImageUpload";
import { useEffect } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import { BannerImg } from "../../Assets/images";

import ProfileMainSkeleton from "../../Component/SkeletonLoaders/ProfileMainSkeleton";

export default function ProfileMain({ UserProfile, UserMatch }) {
  const context = useContext(AuthContext);
  const [imgLink, setimgLink] = useState("");
  const { addImg } = context;

  console.log(UserProfile);
  const [showProfileModal, setProfileModal] = useState(false);
  const [showBannerModal, setBannerModal] = useState(false);
  const [showProfileImg, setProfileImg] = useState(false);

  const ProfileModalStatus = () => {
    setProfileModal((showProfileModal) => !showProfileModal);
  };

  const BannerModal = () => {
    setBannerModal((showBannerModal) => !showBannerModal);
  };

  useEffect(() => {
    setimgLink(imgLink);
  }, [imgLink]);

  const ProfileImg = () => {
    setProfileImg((showProfileImg) => !showProfileImg);
  };

  const [currentImage, setCurrentImage] = useState({});
  const [currentBannerImage, setCurrentBannerImage] = useState({});

  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const getImage = (event) => {
    console.log("I am getimg");
    setCurrentImage(event.target.files[0]);
    console.log(currentImage);
  };
  const getBannerImage = (event) => {
    console.log("I am getimg");
    setCurrentBannerImage(event.target.files[0]);
    console.log(currentImage);
  };

  const [profileImg, setprofileImg] = useState(profileDefault);
  const [bannerImg, setbannerImg] = useState(BannerImg);
  useEffect(() => {
    console.log(UserProfile?.profileImg);
    if (UserProfile?.profileImg) {
      setprofileImg(UserProfile?.profileImg);
    } else {
      setprofileImg(profileDefault);
    }
    if (UserProfile?.bannerImg) {
      setbannerImg(UserProfile?.bannerImg);
    } else {
      setbannerImg(BannerImg);
    }
  }, [UserProfile]);

  const deleteimg = () => {
    addImg({ key: "profileImg", imgUrl: "", username: UserProfile?.username });
    setProfileImg(profileDefault);
  };
  const deletebannerimg = () => {
    addImg({ key: "bannerImg", imgUrl: "", username: UserProfile?.username });
    setbannerImg(BannerImg);
  };
  const uploadbannerimg = async () => {
    console.log(currentBannerImage);
    await uploadBannerImage(
      currentBannerImage,
      UserProfile?.username,
      BannerModal,

      setProgress,
      setCurrentBannerImage,
      addImg
    );
  };
  const uploadImage2 = async () => {
    await uploadImage(
      currentImage,
      UserProfile?.username,
      ProfileImg,
      setModalOpen,

      setProgress,
      setCurrentImage,
      addImg
    );

    // setProfileImg(UserProfile?.profileImg);

    console.log(UserProfile?.profileImg);
    console.log(currentImage);
  };

  if (!UserProfile) {
    return <ProfileMainSkeleton />;
  }

  return (
    <>
      {showProfileModal && (
        <EditProfileModal
          ProfileModalStatus={ProfileModalStatus}
          UserProfile={UserProfile}
        ></EditProfileModal>
      )}
      {showBannerModal && (
        <EditBanner
          BannerModal={BannerModal}
          uploadbannerimg={uploadbannerimg}
          getBannerImage={getBannerImage}
          currentBannerImage={currentBannerImage}
          setProfileModal={setProfileModal}
          progress={progress}
        ></EditBanner>
      )}
      {showProfileImg && (
        <EditProfileImg
          ProfileImg={ProfileImg}
          getImage={getImage}
          uploadImage2={uploadImage2}
          showProfileModal={showProfileModal}
          setProfileModal={setProfileModal}
          currentImage={currentImage}
          progress={progress}
        ></EditProfileImg>
      )}
      <section className="relative block h-[400px] ">
        <div className=" w-full h-full  " onClick={BannerModal}>
          <div className="relative group/buttons h-[300px]">
            <img
              className=" w-full h-full bg-center bg-cover "
              height={10}
              src={bannerImg}
              alt=""
            />

            {UserMatch && (
              <div
                className="z-50   hidden
              
                    group-hover/buttons:block "
              >
                <i
                  onClick={deletebannerimg}
                  className="text-white fa fa-trash  absolute   top-0   "
                >
                  {" "}
                </i>
                <i className="text-white fa fa-pencil  absolute  top-0 left-5  ">
                  {" "}
                </i>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative pt-8 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-darkBgPrimary w-[60%] mx-auto mb-6 shadow-xl rounded-lg -mt-60 p-10">
            <div className=" flex flex-wrap justify-center relative ">
              <div className="group/buttons   relative">
                <img
                  alt="img"
                  src={profileImg}
                  className=" shadow-xl rounded-full w-32 h-32  align-middle border-none -mt-24 bg-white"
                  onClick={ProfileImg}
                />
                {UserMatch && (
                  <div
                    className="  hidden
                    group-hover/buttons:block "
                  >
                    <i
                      onClick={deleteimg}
                      className="text-white fa fa-trash  absolute  right-2/3 bottom-8  "
                    >
                      {" "}
                    </i>
                    <i className="text-white fa fa-pencil  absolute  right-1/4 bottom-8  ">
                      {" "}
                    </i>
                  </div>
                )}
              </div>

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
              <h3 className="text-3xl font-semibold leading-normals text-blueGray-700 mb-2 dark:text-darkTextMain">
                {UserProfile?.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex flex-col">
                  <p>{UserProfile?.username}</p>
                </div>
              </div>
              <div className=" leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                <div className="flex text-xs flex-col">
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
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-briefcase  text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold  w-[90%]  ">
                    <p>{UserProfile?.work}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-graduation-cap text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>{UserProfile?.education}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-map-marker text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>{UserProfile?.location}</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[20%] max-sm:w-[15%]">
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
