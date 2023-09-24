import { Tags } from "../../Component/common";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

export default function BlogCard({ card }) {
  //  Title,
  //  Author_name,
  //  Author_url,
  //  Description,
  //  tags,
  //  Blog_url
  console.log(card.tags);
  // const { card } = props;
  const navigate = useNavigate();

  // const navigate = useNavigate();
  return (
    <div className="flex dark:hover:bg-darkBorderAll hover:bg-[#f0f8ff] flex-col p-6 w-[80%] max-lg:w-[100%] group">
      <div className="max-lg:gap-1  gap-10 flex  justify-center ">
        <div className="w-[70%]">
          <div className="mb-2 flex  items-center justify-between max-lg:items-start max-lg:flex-col">
            <div className="max-lg:items-start max-lg:flex-col flex items-center">
              <div className="flex items-center ">
                <img
                  src={card?.Author_url}
                  className="rounded-full object-contain"
                  width={28}
                  height={32}
                  alt="img"
                />
                <p
                  className="text-[14.5px] ml-2 font-semibold font-palanquin text-gray-700 dark:text-darkTextMain"
                  onClick={() => {
                    navigate(
                      `/author/${card?.Author_name?.replace(/\s+/g, "-")}`,
                      {
                        state: { card },
                      }
                    );
                  }}
                >
                  {card?.Author_name}
                </p>
              </div>
              <span className="text-sm ml-2 font-semibold font-palanquin text-gray-400 max-lg:hidden dark:text-darkTextPrimary">
                -
              </span>
              <p className="text-sm ml-1 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary">
                {/* {card.date} */}
                28 August 2023
              </p>
            </div>
            <div>
              <p className="text-[13px] bg-slate-300 rounded-md p-1">
                {card?.Category}
              </p>
            </div>
          </div>
          {/* <Link to={`/${card?.Title?.replace(/\s+/g, "-")}`}> */}
          <div
            className="flex flex-col "
            onClick={() => {
              navigate(`/${card?.Title?.replace(/\s+/g, "-")}`, {
                state: { card },
              });
            }}
          >
            <h3 className="theme-font-minor text-xl my-1 font-bold font-serif group-hover:text-primaryMain  dark:group-hover:text-secondary dark:text-darkTextMain">
              {card?.Title}
            </h3>
          </div>
          {/* </Link> */}

          {/* <p className="dark:text-darkTextMain">{card.category}</p> */}
        </div>
        <div className="w-240 flex items-center justify-center w-[30%]">
          <img
            src={card?.Blog_url}
            className="max-md:w-[90px] object-contain"
            width={180}
            alt="codeimg"
          />
        </div>
      </div>

      <div className="relative flex flex-wrap w-full mt-2">
        {card?.tags.map((tag, index) => (
          <Tags key={index} tags={tag} />
        ))}
      </div>
    </div>
  );
}
