import { useState } from "react";
import FilterContext from "./FilterContext";

const FilterState = (props) => {
  const host = "http://localhost:5001";

  const [filterBlogs, setfilterBlogs] = useState([]);
  const getallblogs = async () => {
    //API call

    const response = await fetch(`${host}/api/blogs/fetchallblogCards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setfilterBlogs(json);
  };
  const getallcategory = async () => {
    //API call

    const response = await fetch(`${host}/api/filter/getAllCategories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    let arr = json.map((item) => item?.Category);

    return arr;
  };

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
    let response = await fetch(`${host}/api/filter/getlatestblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resp = await response.json();
    console.log(resp);
    setfilterBlogs(resp);
  };

  const getTopBlogs = async (interval) => {
    console.log(interval);
    let response = await fetch(`${host}/api/filter/sortByViews/${interval}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let resp = await response.json();
    console.log(resp);
    setfilterBlogs(resp);
  };

  const deletenote = async (id) => {
    //API call
    const obj = JSON.parse(localStorage.getItem("UserData"));
    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
    });

    const json = response.json();
    const output = filterBlogs.filter((blog) => {
      return blog._id != id;
    });
    setfilterBlogs(output);
  };
  return (
    <FilterContext.Provider
      value={{
        getrelevantblogs,
        getlatestblogs,
        filterBlogs,
        getallcategory,
        setfilterBlogs,
        getTopBlogs,
        getallblogs,
        deletenote,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;
