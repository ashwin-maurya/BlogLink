export default function Tags({ tags }) {
  return (
    <>
      <div className="">
        <span className="text-[18px]">#</span>
        <a
          // href={tags.url}
          className="text-[18px] hover:text-blue-600 hover:underline"
        >
          {tags}
        </a>
      </div>
    </>
  );
}
