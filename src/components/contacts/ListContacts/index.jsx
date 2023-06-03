import { useContext, useEffect, useState } from "react";

import { ContactContext } from "../../../contexts/contact";
import { UserCircleIcon } from "@heroicons/react/outline";
import { toast } from "react-toastify";
import {
  DeviceMobileIcon,
  MailIcon,
  FingerPrintIcon,
  CheckCircleIcon,
  ClipboardCopyIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

export const ListContacts = () => {
  const { allContacts, setAllContacts, listContacts } =
    useContext(ContactContext);
  const [idContact, setIdContact] = useState(null);

  const test = async (id) => {
    setIdContact(id);
    try {
      await navigator.clipboard.writeText(id);
      toast.success("id copied to the clipboard!");
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    listContacts();
    if (!allContacts) return setAllContacts(null);
    return () => setAllContacts(null);
  }, []);

  return (
    <>
      <div className="max-w-full h-7 flex flex-col self-center justify-around items-center">
        <h2 className="text-center text-gray-300 text-xl font-extralight dark:text-slate-200 opacity-90">
          Yours Contacts
        </h2>
      </div>

      <ul className="list h-4/5 w-9/12 grid grid-cols-4 gap-4 px-16 py-8 overflow-y-auto no-scrollbar rounded-3xl ">
        {allContacts &&
          allContacts.map((contact) => (
            <li
              className="animate-[fade_1s_ease-in] h-full p-4 snap-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg transition ease-in delay-0 hover:!opacity-100 hover:scale-110 z-50"
              key={contact.id}
            >
              <div className="flex">
                <UserCircleIcon className="h-20 stroke-1 stroke-white" />

                <div className="h-full w-full flex flex-col self-center">
                  <div className="flex gap-2 w-full">
                    <div className="flex gap-2 w-2/5">
                      <FingerPrintIcon className="w-4 stroke-white" />
                      <h4 className="text-white ">{contact.id}</h4>
                    </div>
                    <div
                      className="flex justify-end w-3/5 z-50"
                      onClick={(e) => test(contact.id)}
                    >
                      {idContact == contact.id ? (
                        <ClipboardCheckIcon className="w-5 stroke-green-500" />
                      ) : (
                        <ClipboardCopyIcon className="w-5 stroke-white after:content-[\testing]" />
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <CheckCircleIcon className="w-4 stroke-white" />
                    <h4 className="text-white">{contact.first_name}</h4>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <MailIcon className="w-4 stroke-white" />
                <h4 className="text-white">{contact.email}</h4>
              </div>
              <div className="flex gap-2 w-full">
                <DeviceMobileIcon className="w-4 stroke-white" />
                <h4 className="text-white">{contact.phone}</h4>
              </div>
            </li>
          ))}

        {allContacts?.length === 0 && <span>You don't have contacts :( </span>}
      </ul>
    </>
  );
};
