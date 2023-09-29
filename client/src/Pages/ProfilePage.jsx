import React, { useState, useEffect } from "react";
import ProfileMain from "../Section/ProfileSection/ProfileMain";
import UserBlogs from "../Section/ProfileSection/UserBlogs";

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");
    const extractedUsername = urlParts[urlParts.length - 1];
    setUsername(extractedUsername);
  }, []);
  return (
    <>
      <ProfileMain username={username} />
      <UserBlogs username={username} />
    </>
  );
}
