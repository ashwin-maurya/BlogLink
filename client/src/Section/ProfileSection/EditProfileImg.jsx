import { useRef } from "react";

export default function EditProfileImg(props) {
  const { ProfileImg } = props;

  const ProfileImgRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (ProfileImgRef.current === event.target) {
      ProfileImg();
    }
  };
  return (
    <>
      <div
        id="myModal"
        className="fixed z-50 inset-0 flex items-center transition-all ease-in-out duration-300 justify-center backdrop-blur-sm bg-Opacityblack"
        ref={ProfileImgRef}
        onClick={handleOutsideClick}
      >
        <div className="w-1/2 max-lg:w-[90%] h-auto   py-5 px-10 flex rounded-lg bg-white dark:bg-darkBgMain shadow-xl flex-col">
          <h1 className="text-xl pb-4   font-bold text-gray-500 tracking-wide">
            Choose Profile Image
          </h1>
          <form className="form flex flex-col w-full  px-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center">
                <div className=" w-full text-center flex  items-center justify-center  flex-row">
                  <img
                    className="has-mask h-36 object-center"
                    src="https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg?w=900&t=st=1696679801~exp=1696680401~hmac=8155e27b46a2e39d8a3e40fcf43a2227156c5e3fc42e1d34f4a35ac9c9fafc87"
                    alt="freepik image"
                  />
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> files here{" "}
                    <br /> or{" "}
                    <a href="" id="" className="text-blue-600 hover:underline">
                      select a file
                    </a>{" "}
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>

            <input
              id="next"
              type="submit"
              value="Upload"
              className="button-submit my-2 text-white rounded-full p-2 font-bold bg-primaryMain dark:bg-secondary cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
