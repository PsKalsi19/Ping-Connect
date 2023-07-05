import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import SearchBar from "./../searchbar/Searchbar";
import { UserContext } from "../../context/UserProvider";
import { USERS_ACTION } from "../../constants/users-actions";
function Navbar() {
  const [top, setTop] = useState(true);
  const {
    handleUserLogout,
    authState: { user },
  } = useContext(AuthContext);
  const profilePic = user.profilePic;
  const {
    usersState: { selectedTheme },
    usersDispatch,
  } = useContext(UserContext);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav
      className={`lg:hidden block sticky left-0 top-0 right-0 ${
        top ? "bg-orange-100" : "bg-orange-100/80  backdrop-blur-xl"
      } z-10`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div></div>
          <NavLink
            href="/home"
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md group"
          >
            <img
              className="w-32 h-10"
              src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300937/Ping%20Connect/logo-no-background_mzrqxn.png"
              alt="ping-connect"
            />
          </NavLink>

          <button
            type="button"
            onClick={() =>
              usersDispatch({
                type: USERS_ACTION.TOGGLE_MOBILE_SIDEBAR,
                payload: true,
              })
            }
          >
            <img
              className="w-8 h-8 rounded-full"
              src={profilePic}
              alt="avatar"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
