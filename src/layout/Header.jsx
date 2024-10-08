import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import netflix_profile from "../assets/images/netflix_profile.png";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.user);

  const handleSignout = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute w-full px-16 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to={"/"}>
        <img
          className="w-32"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      {user?.uid && (
        <div className="flex items-center gap-2">
          <img
            src={user?.photoURL || netflix_profile}
            alt=""
            className="w-9 rounded-md"
          />
          <button className="font-bold text-red-700" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
