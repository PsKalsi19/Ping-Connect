import { useContext, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UserContext } from "./../../context/UserProvider";
import EditProfileForm from "./EditProfileForm";

const EditProfile = () => {
  const { toggleEditProfile, setToggleEditProfile } = useContext(UserContext);

  return (
    <>
      <Transition appear show={toggleEditProfile} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setToggleEditProfile(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-orange-50 dark:bg-stone-900 shadow-xl rounded-2xl">
                  <div className="rounded-xl">
                    <EditProfileForm />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditProfile;
