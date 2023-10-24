import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {
  const host = "http://localhost:5001";

  const [filterBlogs, setfilterBlogs] = useState([]);
  const getrelevantblogs = async (data) => {
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));
    const response = await fetch(`${host}/api/filter/getRelevantBlogs`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const resp = await response.json();
    console.log(resp);
    setfilterBlogs(resp);
  };

  const getlatestblogs = async () => {
    let response = await fetch(`${host}/api/filter/getLatestBlogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resp = await response.json();
    console.log(resp);
    setfilterBlogs(resp);
  };

  const getTopBlogs = async (range) => {
    console.log(range);
    let response = await fetch(`${host}/api/filter/gettopblogs/${range}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resp = await response.json();
    console.log(resp);
    setfilterBlogs(resp);
  };
  return (
    <FilterContext.Provider
      value={{
        getrelevantblogs,
        getlatestblogs,
        filterBlogs,
        setfilterBlogs,
        getTopBlogs,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};
export default FilterState;
