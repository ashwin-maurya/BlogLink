export default function Share(props) {
  // const share = props;
  // console.log(props);
  return (
    <>
      <div className="group ">
        <li
          className={`list-none w-[4rem] border-2  border-transparent dark:border-darkBorderAll dark:group-hover:border-secondary  group-hover:border-primaryMain rounded-xl bg-bgBlue dark:bg-darkBgPrimary ${
            props.check == false ? "px-1" : "px-2"
          } `}
        >
          <a
            className={`block ${
              props.check == false ? "mx-0 my-1 text-2xl" : "mx-1 my-3 text-2xl"
            } relative   text-gray-600 text-center no-underline dark:text-darkTextMain group-hover:text-primaryMain dark:group-hover:text-secondary`}
            href="#"
          >
            <i className={`fa fa-${props.share.name} `}></i>
          </a>
        </li>
      </div>
    </>
  );
}
