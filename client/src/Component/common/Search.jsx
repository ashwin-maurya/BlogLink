import { search } from "../../Assets/icons";

export default function Search() {
  return (
    <>
      <form className="max-md:hidden w-[40%] ml-2">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <img src={search} alt="search image" />
          </div>
          <input
            type="text"
            id="search"
            className="group block w-full p-3 pl-10 text-lg rounded-lg text-gray-900 border-2 border-gray-300 hover:border-blue-400 focus:border-blue-400 outline-none transition-colors duration-300 ease-in-out"
            placeholder="Search...."
            required
          />
        </div>
      </form>
    </>
  );
}