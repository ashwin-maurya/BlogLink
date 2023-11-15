import { useContext, useEffect } from "react";
import CommentLikeContext from "../Helper/Context/CommentLikeContext";
import { useLocation, useParams } from "react-router";
import { BlogCard } from "../Component/common";

const BookmarkPage = () => {
  const context = useContext(CommentLikeContext);
  const { getbookmark, allbookmarks } = context;

  useEffect(() => {
    getbookmark(JSON.parse(localStorage.getItem("UserData")).userDetailId);
    console.log(allbookmarks);
  }, []);

  return (
    <>
      {allbookmarks?.map((card, index) => (
        <BlogCard key={index} isBookmark={true} card={card}></BlogCard>
      ))}
    </>
  );
};

export default BookmarkPage;
