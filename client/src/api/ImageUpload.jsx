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
  username,
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
      console.log(username);
      addImg({ key: "profileImg", imgUrl: response, userID: username });
      setProgress(0);
      ProfileImg();
    }
  );
};

export const uploadBannerImage = async (
  file,

  username,
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
      addImg({ key: "bannerImg", imgUrl: response, userID: username });
      setProgress(0);
      BannerModal();
    }
  );
};
