import React, { useContext, useState, useEffect } from "react";
import MapFilteredData from "../../Component/FilterDataComponents/MapFilteredData";
import blogContext from "../../Helper/Context/blogContext";
import { useLocation } from "react-router-dom";

export default function UserBlogs() {
  const [username, setUsername] = useState("");
  let location = useLocation();

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");
    const extractedUsername = urlParts[urlParts.length - 1];
    setUsername(extractedUsername);
  }, [location]);
  const context = useContext(blogContext);
  const { filterblogs, filterData } = context;
  useEffect(() => {
    filterblogs(username);
  }, [username]);
  return (
    <>
      <section className="relative py-4 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-secondary w-full mb-6 shadow-xl rounded-lg p-10">
            <MapFilteredData filterData={filterData}></MapFilteredData>
          </div>
        </div>
      </section>
    </>
  );
}
