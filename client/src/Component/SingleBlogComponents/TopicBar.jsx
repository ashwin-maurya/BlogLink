const TopicBar = ({ navbarRef, card }) => {
  return (
    <>
      <section
        ref={navbarRef}
        className="fixed  flex justify-between p-1 items-center bg-bgBlue dark:bg-darkBgPrimary dark:text-white w-full transition-all ease-in-out duration-300 delay-300"
      >
        <div className="pl-10  dark:hover:text-secondary font-bold text-xl py-3 tracking-wider ">
          {card?.Title}
        </div>
      </section>
    </>
  );
};

export default TopicBar;
