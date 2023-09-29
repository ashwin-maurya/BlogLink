import React, { useState } from "react";
import blogContext from "./blogContext";

const BlogState = (props) => {
  const host = "http://localhost:5001";
  const bloginitial = [];
  const bloginitial1 = [];

  const [blog, setblogs] = useState(bloginitial);
  const [SingleBlogContent, setSingleBlogContent] = useState({});

  const [filterData, setfilterData] = useState(bloginitial1);

  //Get all notes
  const getblogs = async () => {
    //API call

    const response = await fetch(`${host}/api/blogs/fetchallblogCards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    setblogs(json);
    console.log(blog);
    console.log("form getblogs");
  };

  const filterblogs = async (data) => {
    //API call

    const { state, value } = data;
    console.log("hello");
    const response = await fetch(`${host}/api/blogs/filterblog`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("UserData")).authToken,
      },
      body: JSON.stringify({ state, value }),
    });

    const json = await response.json();

    console.log(json);
    setfilterData(json);
    console.log(filterData);

    console.log("form filtertblogs");
  };
  const getsingleblogContent = async (id) => {
    const response = await fetch(`${host}/api/blogs/getsingleblogcontent`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    const json = await response.json();

    console.log(json);
    setSingleBlogContent(json);
    console.log(SingleBlogContent);

    console.log("form SingleBlogContent");
  };

  //Add a note
  const addblogCard = async (data) => {
    // todo api call
    //API call
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);
    const { Title, postID, userID, tags, Category, Blog_url } = data;
    const response = await fetch(`${host}/api/blogs/addblogCard`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
        Title,
        postID,

        tags,
        Category,
        Blog_url,
      }),
    });
    const blog2 = await response.json();

    console.log(blog2);
    // setblogs(blog.concat(blog2));
    console.log("form addblogCard");
  };

  const addblogcontent = async (data) => {
    // todo api call
    //API call
    const {
      userID,
      postID,
      Title,

      Category,
      Blog_url,
      tags,
      description,
    } = data;

    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);
    const response = await fetch(`${host}/api/blogs/postblogcontent`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
        postID,
        Title,
        description,

        tags,
        Category,
        Blog_url,
      }),
    });
    const blog2 = await response.json();

    // setblogs(blog2);
    console.log(blog2);

    console.log("form addblogcontent");
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
  const updateblog = async (data, id) => {
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

    const response = await fetch(`${host}/api/blogs/updateblog`, {
      method: "PUT",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwODVlZjE5YWIyMmRjZDg3NTQ4ODRlIn0sImlhdCI6MTY5NTA0NzQwOX0.Fk4_lQbt1yaZrdTe4iLEN_E82vXEdY410VGlzsps_WE ",

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title,
        Author_name,
        Author_url,
        Description,
        tags,
        Category,
        Blog_url,
        id,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log("from updateblog");
    // logic to edit in client
    // for (let index = 0; index < blog.length; index++) {
    //   const element = blog[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }

    getblogs();
  };

  return (
    <blogContext.Provider
      value={{
        blog,
        addblogCard,
        getblogs,
        filterblogs,
        filterData,
        updateblog,
        addblogcontent,
        SingleBlogContent,
        getsingleblogContent,
        // , deletenote, getnotes, editnote
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
