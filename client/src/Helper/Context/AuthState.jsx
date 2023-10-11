import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthState = (props) => {
  const host = "http://localhost:5001";
  const [UserDetails, setUserDetails] = useState();
  const [AuthStatus, setAuthStatus] = useState(false);
  const [UserProfile, setUserProfile] = useState();
  const [UserExistStatus, setUserExistStatus] = useState();
  const [loggedin, setLoggedin] = useState({});
  const [loggedinStatus, setLoggedinStatus] = useState(false);
  const [userDetailExist, setUserDetailExist] = useState();

  //Get all notes
  const googlelogin = async (GoogleCreds) => {
    //API call
    const response = await fetch(`${host}/api/auth/googlelogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: GoogleCreds.email,
      }),
    });

    const json = await response.json();
    setLoggedin(json);
    setLoggedinStatus(json.success);
  };

  //Get all notes
  const googlesignup = async (GoogleCreds) => {
    //API call
    const response = await fetch(`${host}/api/auth/googlesignup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: GoogleCreds.name,
        email: GoogleCreds.email,
        username: GoogleCreds.username,
      }),
    });

    const json = await response.json();
    setLoggedin(json);
    setLoggedinStatus(json.success);
  };

  //Get all notes
  const getCurrentUser = async (id) => {
    //API call
    const response = await fetch(`${host}/api/auth/getCurrentuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("UserData")).authtoken,
      },
      user: id,
    });
    const json = await response.json();
    if (json) {
      const username = json.username;
      const response1 = await fetch(`${host}/api/auth/getCurrentUserDetails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("UserData")).authtoken,
        },
        user: username,
      });
      const UserDetail = await response1.json();

      if (UserDetail) {
        const updatedUserDetails = {
          ...json,
          description: UserDetail.description,
          education: UserDetail.education,
          work: UserDetail.work,
          location: UserDetail.location,
        };
        setUserDetails(updatedUserDetails);
      } else {
        setUserDetails(json);
      }
    }
  };

  const getUser = async (username) => {
    //API call
    const response = await fetch(
      `${host}/api/auth/getuser?username=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    const response1 = await fetch(
      `${host}/api/auth/getCurrentUserDetails?username=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const UserDetail = await response1.json();

    if (UserDetail) {
      const updatedUserDetails = {
        ...json,
        description: UserDetail.description,
        education: UserDetail.education,
        work: UserDetail.work,
        location: UserDetail.location,
      };
      setUserProfile(updatedUserDetails);
    } else {
      setUserProfile(json);
    }
  };

  const userexist = async (email) => {
    //API call
    const response = await fetch(`${host}/api/auth/userexist?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setUserExistStatus(json.status);
  };

  const userdetailexist = async () => {
    //API call
    const username = UserDetails.username;
    const response = await fetch(
      `${host}/api/auth/userdetailexist?username=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setUserDetailExist(json.status);
  };

  const adduserdetail = async (userDetail) => {
    //API call
    const username = UserDetails.username;
    const { description, work, education, location } = userDetail;
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const response = await fetch(`${host}/api/auth/adduserdetail`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        description,
        work,
        education,
        location,
      }),
    });
    const ProfileUpdated = await response.json();
    if (ProfileUpdated) {
      toast.success("Profile Saved");
      const updatedUserDetails = {
        ...UserDetails,
        description: ProfileUpdated.description,
        education: ProfileUpdated.education,
        work: ProfileUpdated.work,
        location: ProfileUpdated.location,
      };
      setUserDetails(updatedUserDetails);
      setUserDetailExist();
    } else {
      toast.error("Failed!!");
    }
  };
  const updateuserdetail = async (userDetail) => {
    const username = UserDetails.username;
    const { description, work, education, location } = userDetail;
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const response = await fetch(
      `${host}/api/auth/updateuserdetail/${username}`,
      {
        method: "PUT",
        headers: {
          "auth-token": obj.authtoken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          work,
          education,
          location,
        }),
      }
    );
    const UpdatedProfileJson = await response.json();

    const UpdatedProfile = UpdatedProfileJson.updatedUserDetails;
    const updatedUserDetails = {
      ...UserDetails,
      description: UpdatedProfile.description,
      education: UpdatedProfile.education,
      work: UpdatedProfile.work,
      location: UpdatedProfile.location,
    };
    setUserDetails(updatedUserDetails);
    setUserDetailExist();
    toast.success("Profile Updated");

    setUserDetailExist();
  };
  return (
    <AuthContext.Provider
      value={{
        UserDetails,
        getCurrentUser,
        AuthStatus,
        setAuthStatus,
        getUser,
        UserProfile,
        UserExistStatus,
        userexist,
        loggedin,
        setLoggedin,
        googlelogin,
        loggedinStatus,
        setLoggedinStatus,
        setUserExistStatus,
        googlesignup,
        setUserDetails,
        adduserdetail,
        userDetailExist,
        setUserDetailExist,
        userdetailexist,
        updateuserdetail,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
