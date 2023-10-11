import React, { useContext, useState } from "react";
import ReplyContext from "../../Helper/Context/ReplyContext";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";
import CommentLikeContext from "../../Helper/Context/CommentLikeContext";

const Reply = ({ reply1, commentID, show, setshow }) => {
  // console.log(reply1);
  const context2 = useContext(AuthContext);
  const context3 = useContext(CommentLikeContext);
  const { addreply, setreply, reply } = context3;
  const [allreply, setallreply] = useState(reply);
  const { UserDetails } = context2;
  // console.log(UserDetails);

  const [Reply, setReply] = useState({
    reply: "",
    username: UserDetails?.username,
    userImg: { profileDefault },
    timeStamp: new Date().toISOString(),
  });

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = {
      [name]: value,
    };

    setReply({ ...Reply, ...input });

    console.log(Reply);
  };

  const submit = () => {
    console.log(allreply);
    setallreply({ allreply, Reply });
    console.log(allreply);

    setreply(allreply);
    console.log(reply);
    addreply(allreply, commentID);
    console.log("Saved to reply");
  };
  return (
    <>
      {show && (
        <div className="pt-2 ml-6 ">
          <textarea
            id="comment"
            rows="1"
            name="reply"
            value={Reply?.reply}
            onChange={(e) => {
              getInput(e);
            }}
            className="border-b-2 w-[63%] px-0  text-sm text-gray-900 bg-transparent border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
          ></textarea>

          <div className="w-[65%] mt-1 flex justify-end  gap-5 pr-2">
            <div
              className="bg-primaryMain text-white p-1 px-2 rounded-md"
              onClick={() => {
                setshow(false);
              }}
            >
              <button>Cancel</button>
            </div>
            <div
              className="bg-primaryMain text-white p-1 px-2 rounded-md"
              onClick={submit}
            >
              <button>Reply</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reply;
