export default function Tags({ tags }) {
  const trimSpaces = (str) => str.trim();

  return (
    <>
      <div className="">
        <a className="text-[14px] dark:text-white hover:text-primaryMain hover:underline font-semibold lowercase">
          #{trimSpaces(tags)}
        </a>
      </div>
    </>
  );
}
