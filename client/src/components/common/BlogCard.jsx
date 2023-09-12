export default function BlogCard({ Key, label, imgURL, author }) {
  return (
    <div
      key={Key}
      className="border-2 p  flex flex-row-reverse justify-center  "
    >
      <div className="">
        <img
          src={imgURL}
          className="object-contain "
          width={120}
          height={120}
          alt="codeimg"
        />
      </div>
      <div className="flex flex-col ">
        <h3 className="theme-font-major ">{label}</h3>
        <p className=" text-slate-gray ">{author}</p>
      </div>
    </div>
  );
}
