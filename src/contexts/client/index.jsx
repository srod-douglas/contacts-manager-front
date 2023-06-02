import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export const ClientContext = createContext({})
export const ClientProvider = ({ children }) => {

    const [client, setClient] = useState(null)
    const navigate = useNavigate()

    const clientLogin = async (data) => {
        try{

            const res =  await toast.promise(
                api.post('/login', data),
                {
                    pending: 'Loading...',
                    success: 'Welcome!',

                },
                {autoClose: 800}
            )

            const { token } = res.data
            api.defaults.headers.common.authorization = `Bearer ${token}`

            localStorage.setItem('@token', token)
            setTimeout(() => navigate('/dashboard'), 500)

        }catch(err){toast.error(err.response.data.message)}
    }

    const clientRegister = async (data) => {
        try{

            const res = await toast.promise(
                api.post('/clients', data),
                {
                    pending: 'Loading...',
                    success: 'Welcome!'
                },
                {autoClose: 800}
            )
            
            const { newClient } = res.data
            setClient(newClient)
            setTimeout(() => navigate('/login'), 500)

        }catch(err){toast.error(err.response.data.message)}
    }

    const clientLogout = async () => {
        setClient(null)
        localStorage.removeItem('@token')
        toast.warning('Disconected', {autoClose:500})
        setTimeout(() => navigate('/'), 500)
        navigate('/')
    }
    
    const token = localStorage.getItem('@token')
    
    useEffect(() => {
        ( async () => {

            if (!token){

            }
        })()
    }, [token])

    return (
        <ClientContext.Provider
            value={{ client, clientLogin, clientRegister, clientLogout }}
        >
            {children}
        </ClientContext.Provider>
    )
}