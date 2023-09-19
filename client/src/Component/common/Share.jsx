export default function Share(props) {
  // const share = props;
  // console.log(props);
  return (
    <>
      <div className="group">
        <li
          className={`list-none border-b-2 border-t-2 dark:border-darkBorderAll dark:group-hover:border-secondary group-hover:border-primaryMain ${
            props.check == false ? "px-1" : "px-3"
          } `}
        >
          <a
            className={`block ${
              props.check == false ? "mx-0 my-1 text-3xl" : "mx-3 my-2 text-3xl"
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
