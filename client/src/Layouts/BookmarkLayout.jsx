import BookmarkPage from "../Pages/BookmarkPage";
import { RightSection } from "../Section";
const BookmarkLayout = () => {
  return (
    <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
      <div className="w-[65%] max-lg:w-[100%] max-lg:border-0 border-r-[1px]  border-bgBlue dark:border-darkBorderAll">
        <BookmarkPage></BookmarkPage>{" "}
      </div>
      <div className="relative w-[35%] border-l-[1px] dark:border-darkBorderAll overflow-hidden  max-lg:w-[100%]">
        <RightSection></RightSection>
      </div>
    </section>
  );
};

export default BookmarkLayout;
