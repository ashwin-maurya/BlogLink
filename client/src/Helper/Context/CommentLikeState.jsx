import { useState } from "react";
import CommentLikeContext from "./CommentLikeContext";
import blogContext from "./blogContext";
import { useContext } from "react";
const CommentLikeState = (props) => {
  const [allbookmarks, setallbookmarks] = useState([]);
  const [checkbookmark, setcheckbookmark] = useState([]);

  const context = useContext(blogContext);
  // const {}
  const [reply, setreply] = useState({});
  const host = "http://localhost:5001";
  const [SingleBlogComment, setSingleBlogComment] = useState([]);
  const addreply = async (data) => {
    console.log(data);
    const { id } = data;

    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);

    const response = await fetch(`${host}/api/comments/addreply`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });
    const comments2 = await response.json();
    setreply(comments2);
    console.log(comments2);
  };
  const addcomment = async (data) => {
    // todo api call
    //API call
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);
    const { postID, comment, userID } = data;
    const response = await fetch(`${host}/api/comments/addcomment`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postID,
        comment,
        userID,
      }),
    });
    const comments = await response.json();

    console.log(comments);
    // setSingleBlogComment(SingleBlogComment.concat(comments));
    console.log("form addcomment");
  };

  const getsingleblogComment = async (id) => {
    const response = await fetch(
      `${host}/api/comments/getallcommentsbypostID/${id}`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    console.log(json);
    setSingleBlogComment(json);
    console.log(SingleBlogComment);

    console.log("form SingleBlogContent");
  };
  const getreply = async (id) => {
    const response = await fetch(`${host}/api/comments/getreply/${id}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    setreply(json);
    // console.log(SingleBlogComment);
    console.log(json);

    console.log("form get reply");
    return json;
  };

  const updateViews = async (data) => {
    const { view, id } = data;
    console.log(data);
    let reponse = await fetch(`${host}/api/comments/postViews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ view }),
    });

    let resp = await reponse.json();
    console.log(resp);
  };

  const addbookmark = async (data) => {
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const resp = await fetch(`${host}/api/comments/addbookmark/`, {
      method: "PUT",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp2 = await resp.json();

    console.log(resp2);
  };

  const deletebookmark = async (data) => {
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const resp = await fetch(`${host}/api/comments/deletebookmark/`, {
      method: "PUT",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resp2 = await resp.json();

    console.log(resp2);
  };
  const getbookmark = async (data) => {
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const resp = await fetch(`${host}/api/comments/getbookmark/`, {
      method: "PUT",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const resp2 = await resp.json();
    console.log(resp2);
    setallbookmarks(resp2?.postId);
  };
  const Checkbookmark = async (data) => {
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));

    const resp = await fetch(`${host}/api/comments/checkbookmark/`, {
      method: "PUT",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    const resp2 = await resp.json();
    console.log(resp2);
    setcheckbookmark(resp2?.postId);
  };

  return (
    <CommentLikeContext.Provider
      value={{
        updateViews,
        addreply,
        reply,
        getreply,
        setreply,
        addbookmark,
        getbookmark,
        setallbookmarks,
        allbookmarks,
        Checkbookmark,
        addcomment,
        SingleBlogComment,
        getsingleblogComment,
        checkbookmark,
        deletebookmark,
      }}
    >
      {props.children}
    </CommentLikeContext.Provider>
  );
};

export default CommentLikeState;
