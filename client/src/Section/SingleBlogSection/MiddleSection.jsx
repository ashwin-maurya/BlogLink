import DOMPurify from "dompurify";
const MiddleSection = ({ blog }) => {
  // console.log(blog);
  return (
    <section className="max-container text-[27px]">
      {
        <div
          className="p-6 rounded-xl bg-white dark:bg-darkBgPrimary"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.blogcontent?.description),
          }}
        />
      }
    </section>
  );
};

export default MiddleSection;
