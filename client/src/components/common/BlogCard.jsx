export default function BlogCard({ Key, label, imgURL, author }) {
  return (
    <div
      key={Key}
      className="bg-gray-100 p-3 shadow-lg shadow-gray-300  flex flex-col max-sm:flex-row  rounded-lg"
    >
      <div className="">
        <img
          src={imgURL}
          className="object-contain rounded-lg"
          width={320}
          alt="codeimg"
        />
      </div>
      <div className="flex px-3 max-sm:w-[300px]  items-start sm:p-0 flex-col ">
        <h3 className="font-montserrat leading-5 mt-2">{label}</h3>
        <p className="mt-1 text-slate-gray text-[17px]">{author}</p>
      </div>
    </div>
  );
}
