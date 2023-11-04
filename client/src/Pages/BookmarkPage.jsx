import { useContext, useEffect } from "react";
import CommentLikeContext from "../Helper/Context/CommentLikeContext";
import { useLocation } from "react-router";
import { BlogCard } from "../Component/common";
const BookmarkPage = () => {
  const location = useLocation();
  let userID = location.state?.userID;
  console.log(userID);
  const context = useContext(CommentLikeContext);
  const { getbookmark, allbookmarks } = context;

  useEffect(() => {
    getbookmark(userID);
    console.log(allbookmarks);
  }, []);

  return (
    <>
      {allbookmarks?.map((card, index) => (
        <BlogCard key={index} card={card}></BlogCard>
      ))}
    </>
  );
};

export default BookmarkPage;
