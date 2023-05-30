import { createContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

export const ContactContext = createContext({})
export const ContactProvider = ({ children }) => {
    const token = localStorage.getItem('@token')
    const [contact, setContact] = useState(null)
    const [search, setSearch] = useState(false)
    const [id, setId] = useState(null)
    const [allContacts, setAllContacts] = useState(null)

    const createContact = async (data) => {
        try{

            await toast.promise(
                api.post('/contacts', data, {
                    headers:{
                        auth: `Bearer ${token}`
                    }
                }),
                {
                    pending: 'Loading...',
                    success: 'Contact created!'
                },
                {autoClose: 800}
            )

        }catch(err){toast.error(err.response.data.message)}
    }

    const readContact = async (id) => {
        try{

            const res = await toast.promise(
                api.get(`/contacts/${id}`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }),
                {
                    pending: 'Loading...'
                },
            )
            const contact = res.data
            setContact(contact)

        }catch(err){toast.error(err.response.data.message)}
    }



    const listContacts = async () => {
        try{
            const token = localStorage.getItem('@token')
            const res = await toast.promise(
                api.get('/contacts', {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }),
                {
                    pending: 'Loading...'
                },
            )

            const allContacts = res.data
            setAllContacts(allContacts)

        }catch(err){toast.error(err.response.message)}

    }

    useEffect(() => {

        (async() => {
            try{
                const token = localStorage.getItem('@token')
                    const { id, ...rest } = contact
                    console.log(contact)
                    const idContact = +id

                    await toast.promise(
                        api.patch(`/contacts/${idContact}`, rest, {
                            headers:{
                                Authorization: `Bearer ${token}`
                            }
                        }),
                        {
                            pending: 'Loading...',
                            success: 'Contact updated!'
                        },
                        {autoClose: 800},
                    )
    
                }catch(err){toast.error(err.response)}
        })()
    }, [])

    const deleteContact = async (id) => {
        try{

            await toast.promise(
                api.delete(`/contacts/${id}`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }),
                {
                    pending: 'Loading...',
                    success: 'Contact deleted!'
                },
                {autoClose: 800},
            )

        }catch(err){toast.error(err.response.data.message)}
    }

    return (
        <ContactContext.Provider
            value={{ contact, setContact, setAllContacts, listContacts, allContacts, id, setId, search, setSearch, createContact, readContact, deleteContact }}
        >
            {children}
        </ContactContext.Provider>
    )
}