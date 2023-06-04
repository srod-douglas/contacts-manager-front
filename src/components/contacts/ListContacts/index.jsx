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
  TrashIcon
} from "@heroicons/react/outline";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const ListContacts = () => {
  const { allContacts, setAllContacts, listContacts, isDelete, setIsDelete } =
    useContext(ContactContext);
  const navigate = useNavigate()
  const [idContact, setIdContact] = useState(null);

  console.log(isDelete)
  const copy = async (id) => {
    setIdContact(id);
    try {
      await navigator.clipboard.writeText(id);
      toast.success("id copied to the clipboard!");
    } catch (err) {
      toast.error(err);
    }
  };

  const handlerModal = (id) => {
    setIsDelete(id)
  }

  useEffect(() => {
    listContacts();
    if (!allContacts) return setAllContacts(null);
    return () => setAllContacts(null);
  }, []);

  return (
    <>

      <div className="animate-[fade_.5s_ease-in] max-w-full h-7 flex flex-col self-center justify-around items-center ">
        <h2 className="text-2xl text-center text-gray-300 font-extralight dark:text-slate-200 opacity-90">
          Yours Contacts
        </h2>
      </div>

      <ul className="animate-[fade_.5s_ease-in] list h-4/5 w-9/12 grid grid-cols-4 gap-4 px-16 py-8 overflow-y-auto no-scrollbar rounded-3xl ">
        {allContacts &&
          allContacts.map((contact) => (
            <li
              className=" h-full p-4 snap-center bg-black bg-opacity-40 backdrop-blur-md rounded-lg transition ease-in delay-0 hover:!opacity-100 hover:scale-105 hover:shadow-gray-600 hover:shadow-md hover:bg-opacity-60 z-50"
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
                      onClick={() => copy(contact.id)}
                    >
                      {idContact == contact.id ? (
                        <ClipboardCheckIcon className="w-5 stroke-green-500" />
                      ) : (
                        <ClipboardCopyIcon className="w-5 stroke-white" />
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <div className="flex gap-2 w-2/5">
                      <CheckCircleIcon className="w-4 stroke-white" />
                      <h4 className="text-white">{contact.first_name}</h4>
                    </div>
                    <Link to={'/dashboard/confirm-delete'} onClick={() => handlerModal(contact.id)} className="flex justify-end w-3/5 z-50">
                      <TrashIcon className="w-5 stroke-white" />
                    </Link>
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
