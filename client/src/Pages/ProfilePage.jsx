import React, { useState, useEffect } from "react";
import ProfileMain from "../Section/ProfileSection/ProfileMain";
import UserBlogs from "../Section/ProfileSection/UserBlogs";

export default function ProfilePage() {
  return (
    <>
      <ProfileMain />
      <UserBlogs />
    </>
  );
}
