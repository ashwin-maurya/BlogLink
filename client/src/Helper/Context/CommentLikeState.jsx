import CommentLikeContext from "./CommentLikeContext";

const CommentLikeState = (props) => {
  const host = "http://localhost:5001";

  //Get all notes

  return (
    <CommentLikeContext.Provider value={{}}>
      {props.children}
    </CommentLikeContext.Provider>
  );
};

export default CommentLikeState;
