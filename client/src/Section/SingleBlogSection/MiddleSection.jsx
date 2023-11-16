import DOMPurify from "dompurify";
const MiddleSection = ({ blog }) => {
  // console.log(blog);
  return (
    <div
      className="max-md:text-[18.5px] text-[27px] px-6 py-1 pt-6 text-justify bg-white dark:bg-darkBgPrimary"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(blog?.blogcontent?.description),
      }}
    />
  );
};

export default MiddleSection;
