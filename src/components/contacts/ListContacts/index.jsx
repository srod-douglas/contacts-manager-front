import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
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


export const ListContacts = () => {
  const { allContacts, setAllContacts, listContacts, isDelete, setIsDelete } =
    useContext(ContactContext);

  const [idContact, setIdContact] = useState(null);

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
      <div className="div-title">
        <h2 className='title'>
          Yours Contacts
        </h2>
      </div>

      <ul className='list-container'>
        {allContacts &&
          allContacts.map((contact) => (

            <li key={contact.id}>
              <div className="flex">
                <UserCircleIcon className="icon-contact" />

                <div className="container-id-first-name">
                  <div className="div-list-infos">
                    <div>
                      <FingerPrintIcon className="icon-white" />
                      <h4 className="text-white ">{contact.id}</h4>
                    </div>
                    <div className="div-interact-icons" onClick={() => copy(contact.id)}>
                      {idContact == contact.id ? 
                        (
                          <ClipboardCheckIcon className="icon-green" />
                        ) : (
                          <ClipboardCopyIcon className="icon-white-g" />
                        )
                      }
                    </div>
                  </div>

                  <div className="div-list-infos">
                    <div>
                      <CheckCircleIcon className="icon-white" />
                      <h4 className="text-white">{contact.first_name}</h4>
                    </div>
                    <Link to={'/dashboard/confirm-delete'} onClick={() => handlerModal(contact.id)} className="div-interact-icons">
                      <TrashIcon className="icon-white-g" />
                    </Link>
                  </div>

                </div>
              </div>

              <div className="div-list-infos">
                <MailIcon className="icon-white" />
                <h4 className="text-white">{contact.email}</h4>
              </div>
              <div className="div-list-infos">
                <DeviceMobileIcon className="icon-white" />
                <h4 className="text-white">{contact.phone}</h4>
              </div>
            </li>
          ))}

        {allContacts?.length === 0 && <span className='title'>You don't have contacts :( </span>}
      </ul>
    </>
  );
};
