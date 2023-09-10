import { search } from "../../assets/icons";

export default function Search() {
  return (
    <>
      <form className="max-md:hidden w-[40%]">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={search} alt="search image" />
          </div>
          <input
            type="text"
            id="search"
            className="group block w-full p-4 pl-10 text-sm rounded-lg text-gray-900 border-2 border-gray-300 focus:border-blue-300 outline-none transition-colors duration-300 ease-in-out"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="text-gray-300 absolute right-2.5 bg-white bottom-2.5 border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2 transition-opacity duration-300 ease-in-out group-focus:text-blue-600"
            id="search-button"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
