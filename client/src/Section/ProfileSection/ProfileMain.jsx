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
import { editPen, trash } from "../../Assets/icons";
import ProfileMainSkeleton from "../../Component/SkeletonLoaders/ProfileMainSkeleton";
import { useNavigate } from "react-router";

export default function ProfileMain({ UserProfile, UserMatch }) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [imgLink, setimgLink] = useState("");
  const { addImg, updateuserdetail, UserDetails } = context;
  const [showProfileModal, setProfileModal] = useState(false);
  const [showBannerModal, setBannerModal] = useState(false);
  const [showProfileImg, setProfileImg] = useState(false);
  console.log(UserDetails?._id);
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
    setCurrentImage(event.target.files[0]);
  };
  const getBannerImage = (event) => {
    setCurrentBannerImage(event.target.files[0]);
  };

  const [profileImg, setprofileImg] = useState(profileDefault);
  const [bannerImg, setbannerImg] = useState(BannerImg);
  useEffect(() => {
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
    addImg({ key: "profileImg", imgUrl: "", userID: UserDetails?._id });
    setProfileImg(profileDefault);
  };
  const deletebannerimg = () => {
    addImg({ key: "bannerImg", imgUrl: "", userID: UserDetails?._id });
    setbannerImg(BannerImg);
  };
  const uploadbannerimg = async () => {
    await uploadBannerImage(
      currentBannerImage,
      UserDetails?._id,
      BannerModal,

      setProgress,
      setCurrentBannerImage,
      addImg
    );
  };
  const uploadImage2 = async () => {
    await uploadImage(
      currentImage,
      UserDetails?._id,
      ProfileImg,
      setModalOpen,
      setProgress,
      setCurrentImage,
      addImg
    );
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
        <div className=" w-full h-full  ">
          <div className="relative group/buttons h-[300px]">
            <img
              className=" w-full h-full bg-center bg-cover "
              height={10}
              src={bannerImg}
              alt=""
            />

            {UserMatch && (
              <div className=" absolute bg-white dark:bg-secondary  top-0 right-0  rounded-full m-2 ">
                <div className="hover:bg-[#e0d1ff] rounded-t-full">
                  <img src={editPen} className="p-2" onClick={BannerModal} />
                </div>
                <div className="hover:bg-[#e0d1ff] rounded-b-full">
                  <img
                    src={trash}
                    alt="trash"
                    className="p-2"
                    onClick={deletebannerimg}
                  />
                </div>
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
                  className="shadow-xl rounded-full  w-40 h-40  align-middle -mt-24 bg-white dark:bg-darkBgMain border-4 border-white"
                />
                {UserMatch && (
                  <div className=" absolute bg-white dark:bg-secondary flex -bottom-4 right-9  rounded-full m-2 ">
                    <div className="hover:bg-[#e0d1ff] rounded-l-full">
                      <img src={editPen} className="p-2" onClick={ProfileImg} />
                    </div>
                    <img
                      src={trash}
                      className="p-2 hover:bg-[#e0d1ff] rounded-r-full"
                      onClick={deleteimg}
                    />
                  </div>
                )}
              </div>

              {UserMatch && (
                <div className="absolute right-0 top-0">
                  <button
                    className=" hover:bg-[#e0d1ff] rounded-full  font-semibold text-white"
                    onClick={() => {
                      navigate(`/settings`, {});
                    }}
                    // onClick={ProfileModalStatus}
                  >
                    <img
                      src={editPen}
                      className="p-3 text-base font-semibold text-white"
                    />
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
