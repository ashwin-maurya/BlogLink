export default function BlogCard({
  Key,
  label,
  imgURL,
  author,
  tags,
  date,
  category,
  imgURL2,
}) {
  return (
    <div
      key={Key}
      className="border-2  border-x-0 border-t-0 p-6  gap-10 flex  justify-center  "
    >
      <div className="w-[400px] ">
        <div className="mb-2  flex items-center  ">
          <img
            src={imgURL2}
            className="rounded-full object-contain"
            width={28}
            height={32}
            alt=""
          />
          <p className="text-[14.5px] ml-2 font-semibold font-palanquin text-gray-700 ">
            {author}
          </p>
          <span className="text-sm ml-2 font-semibold font-palanquin text-gray-500 ">
            -
          </span>
          <p className="text-sm ml-1 font-semibold font-palanquin text-gray-500 ">
            {date}
          </p>
        </div>
        <div className="flex flex-col ">
          <h3 className="theme-font-minor  font-extrabold ">{label}</h3>
        </div>
        <p>{category}</p>
      </div>
      <div className="w-240 ">
        <img
          src={imgURL}
          className="max-md:w-[90px] max-md:mt-8 object-contain "
          width={120}
          height={120}
          alt="codeimg"
        />
      </div>
    </div>
  );
}
