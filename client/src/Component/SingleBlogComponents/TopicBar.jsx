import { useNavigate } from "react-router";

const TopicBar = ({ navbarRef, card }) => {
  const navigate = useNavigate();
  return (
    <>
      <section
        ref={navbarRef}
        className="fixed  flex justify-between p-1 items-center bg-white  dark:bg-darkBgPrimary dark:text-white w-full transition-all delay-300"
      >
        <div className="pl-10 dark:hover:text-secondary font-[Georgia] tracking-wider ">
          {card?.Title}
        </div>
        <div
          // Noe Display,Merriweather,Georgia,serif
          className=" pr-10 "
          onClick={() => {
            navigate(`/write`, {
              state: { card },
            });
          }}
        >
          <i className="fa fa-edit text-3xl dark:hover:text-secondary hover:text-primaryMain"></i>
        </div>
      </section>
    </>
  );
};

export default TopicBar;
