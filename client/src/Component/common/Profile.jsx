import { ProfileModal } from "./";

export default function Profile({ profileImg, name }) {
  return (
    <>
      <div className="flex gap-2 text-lg leading-normal font-medium px-4 items-center ">
        <img
          src={profileImg}
          alt=""
          className="rounded-full"
          width={35}
          height={35}
        />
        <span className="dark:text-darkTextMain ">{name}</span>
        <ProfileModal />
      </div>
    </>
  );
}
