import { useState } from "react";
import CommentLikeContext from "./CommentLikeContext";

const CommentLikeState = (props) => {
  const host = "http://localhost:5001";
  const [SingleBlogComment, setSingleBlogComment] = useState([]);
  const addreply = async (data, id) => {
    // todo api call
    //API call
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);
    const {
      reply,
      username,
      userImg,
      timeStamp,
      // , UserName
    } = data;
    const response = await fetch(`${host}/api/comments/addreply/${id}`, {
      method: "POST",
      headers: {
        "auth-token": obj.authtoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reply,
        username,
        userImg,
        timeStamp,
        // UserName,
      }),
    });
    const comments2 = await response.json();

    let { comments } = comments2;
    console.log(comments);

    // for (let i = 0; i < SingleBlogComment.length; i++) {
    //   if (SingleBlogComment[i]._id == id) {
    //     SingleBlogComment[i] = replies;
    //   }
    // }

    let datas =
      //  setSingleBlogComment(
      SingleBlogComment.filter((comment) => {
        return comment._id != id;
      });
    // );
    datas.push(comments);
    setSingleBlogComment(datas);
    // setSingleBlogComment(SingleBlogComment.concat(comments));
    console.log(SingleBlogComment);
    console.log("form addreply");
  };
  const addcomment = async (data) => {
    // todo api call
    //API call
    console.log(data);
    const obj = JSON.parse(localStorage.getItem("UserData"));
    console.log(obj.authtoken);
    const { postID, comment, userID, UserName } = data;
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
        UserName,
      }),
    });
    const comments = await response.json();

    console.log(comments);
    setSingleBlogComment(SingleBlogComment.concat(comments));
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
  return (
    <CommentLikeContext.Provider
      value={{
        addreply,
        addcomment,
        SingleBlogComment,
        getsingleblogComment,
      }}
    >
      {props.children}
    </CommentLikeContext.Provider>
  );
};

export default CommentLikeState;
