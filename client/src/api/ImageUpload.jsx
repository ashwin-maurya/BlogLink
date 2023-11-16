import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
// import { editProfile } from "./FirestoreAPI";
import { storage } from "../../firebaseConfig";

export const uploadImage = async (
  file,
  userID,
  ProfileImg,
  setModalOpen,

  setProgress,
  setCurrentImage,
  addImg
) => {
  // deleteObject(profilePicsRef);

  const profilePicsRef = ref(storage, `profileImages/${file.name}`);
  const uploadTask = uploadBytesResumable(profilePicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      console.log("I ran!!!");
      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    async () => {
      const response = await getDownloadURL(uploadTask.snapshot.ref);
      // editProfile(id, { imageLink: response });

      setModalOpen(false);
      setCurrentImage({});
      addImg({ key: "profileImg", imgUrl: response, userID: userID });
      setProgress(0);
      ProfileImg();
    }
  );
};

export const uploadBannerImage = async (
  file,

  userID,
  BannerModal,

  setProgress,
  setCurrentBannerImage,
  addImg
) => {
  const postPicsRef = ref(storage, `bannerImages/${file.name}`);
  const uploadTask = uploadBytesResumable(postPicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    async () => {
      const response = await getDownloadURL(uploadTask.snapshot.ref);
      // editProfile(id, { imageLink: response });

      console.log(response);
      console.log("response");

      setCurrentBannerImage({});
      addImg({ key: "bannerImg", imgUrl: response, userID: userID });
      setProgress(0);
      BannerModal();
    }
  );
};

export const uploadFeaturedImage = async (
  file,
  setfeaturedImage,
  setProgress
) => {
  const postPicsRef = ref(storage, `featuredImages/${file.name}`);
  const uploadTask = uploadBytesResumable(postPicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    async () => {
      const response = await getDownloadURL(uploadTask.snapshot.ref);
      // editProfile(id, { imageLink: response });

      setfeaturedImage(response);
      console.log(response);
      console.log("response");
      setProgress(0);
    }
  );
};
