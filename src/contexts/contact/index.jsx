import { createContext, useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { ClientContext } from '../client';


export const ContactContext = createContext({})
export const ContactProvider = ({ children }) => {

    const { tokenUser, clientLogout } = useContext(ClientContext)
    const [id, setId] = useState(0)
    const [search, setSearch] = useState(false)
    const [contact, setContact] = useState(null)
    const [allContacts, setAllContacts] = useState(null)
    const [isDelete, setIsDelete] = useState(null)

    const createContact = async (data) => {
        try{

            await toast.promise(
                api.post('/contacts', data, {
                    headers:{
                        auth: `Bearer ${tokenUser}`
                    }
                }),
                {
                    pending: 'Loading...',
                    success: 'Contact created!'
                },
                {autoClose: 800}
            )

        }catch(err){
            toast.error(err.response.statusText)
        }
    }

    const readContact = async (id) => {

        try{
        
            const res = await toast.promise(
                api.get(`/contacts/${id}`, {
                    headers:{
                        Authorization: `Bearer ${tokenUser}`
                    }
                }),
                {
                    pending: 'Loading...'
                },
            )
            const contact = res.data
            setContact(contact)

        }catch(err){
            toast.error(err.response.statusText)
        }
    }

    const listContacts = async () => {
        try{

            const res = await toast.promise(
                api.get('/contacts', {
                    headers:{
                        Authorization: `Bearer ${tokenUser}`
                    }
                }),
                {
                    pending: 'Loading...'
                },
                {autoClose: 1500}
            )

            const allContacts = res.data
            setAllContacts(allContacts)

        }catch(err){
            toast.error(err.response.statusText)
        }

    }

    const updateContact = async (data) => {

        try{
            const { id, ...rest } = data
            const idContact = +id
            idContact === 0 ? toast.warning('id not found') : (
            await toast.promise(
                api.patch(`/contacts/${idContact}`, rest, {
                    headers:{
                        Authorization: `Bearer ${tokenUser}`
                    }
                }),
                {
                    pending: 'Loading...',
                    success: 'Contact updated!'
                },
                {autoClose: 1500},
            ))

        }catch(err){
            toast.error(err.response.statusText)
        }
    }
    useEffect(() => {
        (async() => {
            if(id > 0) await readContact(id)
        })()
    }, [id])

    const deleteContact = async (id) => {
        try{

            await toast.promise(
                api.delete(`/contacts/${id}`, {
                    headers:{
                        Authorization: `Bearer ${tokenUser}`
                    }
                }),
                {
                    pending: 'Loading...',
                    success: 'Contact deleted!'
                },
                {autoClose: 1500},
            )

        }catch(err){
            toast.error(err.response.statusText)
        }
    }

    return (
        <ContactContext.Provider
            value={{ contact, setContact, allContacts, setAllContacts, id, setId, search, setSearch, isDelete, setIsDelete, listContacts, createContact, readContact, updateContact, deleteContact }}
        >
            {children}
        </ContactContext.Provider>
    )
}