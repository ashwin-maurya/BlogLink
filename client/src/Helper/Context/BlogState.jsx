import React, { useState } from "react";
import blogContext from "./blogContext";

const BlogState = (props) => {
  const host = "http://localhost:5001";
  const bloginitial = [];

  const [blog, setblogs] = useState(bloginitial);
  const [filterData, setfilterData] = useState({ bloginitial });

  //Get all notes
  const getblogs = async () => {
    //API call
    console.log("hello");
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwODVlZjE5YWIyMmRjZDg3NTQ4ODRlIn0sImlhdCI6MTY5NTA0NzQwOX0.Fk4_lQbt1yaZrdTe4iLEN_E82vXEdY410VGlzsps_WE ",
      },
    });

    const json = await response.json();

    setblogs(json);
    console.log(blog);
    console.log("form getblogs");
  };

  const filterblogs = async (data) => {
    //API call

    const { value } = data;
    console.log("hello");
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwODVlZjE5YWIyMmRjZDg3NTQ4ODRlIn0sImlhdCI6MTY5NTA0NzQwOX0.Fk4_lQbt1yaZrdTe4iLEN_E82vXEdY410VGlzsps_WE ",
      },
      body: JSON.stringify(value),
    });

    const json = await response.json();

    setfilterData(json);
    console.log(blog);
    console.log("form filtertblogs");
  };

  //Add a note
  const addblogs = async (data) => {
    // todo api call
    //API call
    const {
      Title,
      Author_name,
      Author_url,
      Description,
      tags,
      Category,
      Blog_url,
    } = data;
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwODVlZjE5YWIyMmRjZDg3NTQ4ODRlIn0sImlhdCI6MTY5NTA0NzQwOX0.Fk4_lQbt1yaZrdTe4iLEN_E82vXEdY410VGlzsps_WE ",
        // localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Title,
        Author_name,
        Author_url,
        Description,
        tags,
        Category,
        Blog_url,
      }),
    });
    const blog2 = await response.json();

    setblogs(blog.concat(blog2));
  };

  //Delete a note
  const deletenote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });

    const json = response.json();

    const output = blog.filter((blog) => {
      return blog._id != id;
    });
    console.log(id);
    setblogs(output);
    console.log(blog);
  };

  //Edit a note
  const editnote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // logic to edit in client
    for (let index = 0; index < blog.length; index++) {
      const element = blog[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    getblogs();
  };

  return (
    <blogContext.Provider
      value={{
        blog,
        addblogs,
        getblogs,
        filterblogs,
        // , deletenote, getnotes, editnote
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
