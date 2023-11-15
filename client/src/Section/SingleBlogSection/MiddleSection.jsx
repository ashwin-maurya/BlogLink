import DOMPurify from "dompurify";
const MiddleSection = ({ blog }) => {
  // console.log(blog);
  return (
    <section className="max-container  max-md:text-[18.5px] text-[27px]">
      {
        <div
          className="px-6 py-1 rounded-xl max-sm:rounded-md bg-white dark:bg-darkBgPrimary"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.blogcontent?.description),
          }}
        />
      }
    </section>
  );
};

export default MiddleSection;
