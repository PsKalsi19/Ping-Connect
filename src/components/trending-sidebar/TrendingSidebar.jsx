import { useContext } from "react";
import SearchBar from "../searchbar/Searchbar";
import { UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";

const TrendingSidebar = () => {
  const {
    getUsersNotOnFollowingList,
    handleFollowRequest,
    usersState: { disableButton },
  } = useContext(UserContext);
  const whoToFollow = getUsersNotOnFollowingList();
  return (
      <div className="flex flex-col">
          <div className="sticky inset-x-0 pt-4">
            <SearchBar />
          </div>
          <div className="flex flex-col flex-1 pb-4 mt-1 overflow-y-auto">
            <nav className="flex-1 mt-4 space-y-1">
              {/* Follow Suggestions */}
                <div className="block max-w-sm p-4 border border-gray-300 rounded-lg shadow-md">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-50 ">
                    Who to Follow
                  </h5>
                  {whoToFollow &&
                    whoToFollow.length > 0 &&
                    whoToFollow.map((followUser, index) => (
                      <div
                        key={followUser._id}
                        className={`flex flex-row justify-between p-2 hover:bg-orange-200 dark:hover:bg-stone-700 hover:rounded-md gap-x-2 ${
                          index === whoToFollow.length - 1
                            ? ""
                            : "border-gray-300 border-b"
                        } `}
                      >
                        <div className="flex flex-row">
                          <Link to="/profile" state={followUser}>
                            <img
                              className="w-10 h-10 rounded-full"
                              src={followUser.profilePic}
                              alt="avatar"
                            />
                          </Link>
                          <div className="flex flex-col ml-2">
                            <p className="font-semibold text-gray-700 dark:text-gray-50">{`${followUser.firstName} ${followUser.lastName}`}</p>
                            <small className="text-xs font-semibold text-gray-500 dark:text-gray-300">
                              {followUser.username}
                            </small>
                          </div>
                        </div>
                        <button
                          disabled={disableButton}
                          onClick={() => handleFollowRequest(followUser._id)}
                          className={`inline-flex items-center border border-orange-200 dark:border-stone-400 justify-center w-24 col-span-2 px-2 text-sm font-medium text-center text-gray-700 rounded-md shadow 
                          dark:bg-stone-100 dark:hover:bg-stone-800 dark:hover:text-gray-50 dark:text-gray-700
                          hover:text-gray-100 bg-orange-50 hover:bg-orange-400/80 ${
                            disableButton
                              ? " cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                        >
                          Follow
                        </button>
                      </div>
                    ))}
                  {whoToFollow && whoToFollow.length === 0 && (
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 dark:text-gray-100 ">
                      Nothing to show! 😪
                    </h5>
                  )}
                </div>
            </nav>
          </div>
      </div>
  );
};

export default TrendingSidebar;
