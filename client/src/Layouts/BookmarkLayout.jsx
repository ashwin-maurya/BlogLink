import BookmarkPage from "../Pages/BookmarkPage";
import { RightSection } from "../Section";
const BookmarkLayout = () => {
  return (
    <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
      <div className="p-10">
        <BookmarkPage></BookmarkPage>{" "}
      </div>
      <div className="relative w-[35%] border-l-[1px] dark:border-darkBorderAll overflow-hidden  max-lg:w-[100%]">
        <RightSection></RightSection>
      </div>
    </section>
  );
};

export default BookmarkLayout;
