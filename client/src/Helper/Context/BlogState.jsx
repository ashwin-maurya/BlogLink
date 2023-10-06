import { useState } from "react";
import blogContext from "./blogContext";

const BlogState = (props) => {
  const host = "http://localhost:5001";
  const bloginitial = [];
  const bloginitial1 = [];

  const [blog, setblogs] = useState(bloginitial);
  const [SingleBlogContent, setSingleBlogContent] = useState({});

  const [filterData, setfilterData] = useState(bloginitial1);

  //Get all blogs------------------------------------------------------------------------------------------------
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
  };

  //Filter blogs by Username ----------------------------------------------------------------------------------------
  const filterblogs = async (username) => {
    const response = await fetch(
      `${host}/api/blogs/filterblog?username=${username}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    setfilterData(json);
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

    setSingleBlogContent(json);
  };

  //Add a note
  const addblogCard = async (data) => {
    // todo api call
    //API call
    const obj = JSON.parse(localStorage.getItem("UserData"));
    const { Title, postID, userID, UserName, tags, Category, Blog_url } = data;
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
        UserName,
        tags,
        Category,
        Blog_url,
      }),
    });
    const blog2 = await response.json();

    // setblogs(blog.concat(blog2));
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
  };

  //Delete a note
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
    const output = blog.filter((blog) => {
      return blog.postID != id;
    });
    setblogs(output);
  };

  //Edit a note
  const updateblog = async (data, id) => {
    //API call

    const {
      Title,
      UserName,
      postID,
      userID,
      Category,
      tags,
      Blog_url,
      description,
    } = data;
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const response = await fetch(`${host}/api/blogs/updateblog/${id}`, {
      method: "PUT",
      headers: {
        "auth-token": obj.authtoken,

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title,
        UserName,
        postID,
        userID,
        Category,
        tags,
        Blog_url,
        description,
      }),
    });
    const json = await response.json();
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
        deletenote,
        // , getnotes, editnote
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
