const ShareSkeleton = (props) => {
  return (
    <div className="group ">
      <li
        className={`list-none w-[4rem] border-transparent dark:border-darkBorderAll  rounded-xl bg-bgBlue dark:bg-darkBgPrimary ${
          props.check == false ? "px-1" : "px-2"
        } `}
      >
        <a
          className={`block ${
            props.check == false ? "mx-0 my-1 text-2xl" : "mx-1 my-3 text-2xl"
          } relative   text-gray-600 text-center no-underline dark:text-darkTextMain bg-gray-200  dark:bg-gray-700 h-12  `}
          href="#"
        >
          {/* <i className={`fa fa-${props.share.name} `}></i> */}
        </a>
      </li>
    </div>
  );
};

export default ShareSkeleton;
