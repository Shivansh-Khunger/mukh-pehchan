import { Link } from "react-router-dom";
import ProfilePic from "../ProfilePic";

function ProfileIcon({ setClickPic }) {
  return (
    <div className=" w-full flex items-center flex-col gap-y-2">
      <ProfilePic />
      <button
        onClick={(e) => {
          e.preventDefault();
          setClickPic(true);
        }}
        className="px-3 py-2 rounded-md bg-black text-white my-4"
      >
        Add Image+
      </button>
    </div>
  );
}
export default ProfileIcon;
