import { ProfileModal } from "./";

export default function Profile({ name }) {
  return (
    <>
      <div className="flex gap-2 text-lg leading-normal font-medium px-4 items-center ">
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
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
