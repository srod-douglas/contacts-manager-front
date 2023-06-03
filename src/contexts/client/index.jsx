import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export const ClientContext = createContext({})
export const ClientProvider = ({ children }) => {

    const tokenUser = localStorage.getItem('@token') || null

    const [client, setClient] = useState('new')
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

            const { token, user } = res.data
            api.defaults.headers.common.authorization = `Bearer ${token}`

            setClient(user)
            localStorage.setItem('@token', token)
            localStorage.setItem('@client', JSON.stringify(user))

            setTimeout(() => navigate('/dashboard'), 500)

        }catch(err){
            toast.error(err.data)
            navigate('')
        }
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

    const clientInfos = async (id)  => {
        try{
            const res = await api.get(`/clients/${id}`)
            api.defaults.headers.common.authorization = `Bearer ${tokenUser}`
            localStorage.setItem('@client', JSON.stringify(res.data))
            setClient(res.data)

        }catch(err){
            console.log(err)
        }
    }

    const clientLogout = async () => {
        setClient(null)
        localStorage.clear()
        toast.warning('Disconected', {autoClose:500})
        setTimeout(() => navigate('/'), 500)
        navigate('/')
    }
    
    useEffect(() => {

        if(!tokenUser && !client){
            toast.error('user not authorized. Login here')
            navigate('')
        }
        return () => console.log('desmontou a dashboard')

    }, [])
    // useEffect(() => {

    // })

    return (
        <ClientContext.Provider
            value={{ client, clientLogin, clientRegister, clientInfos, clientLogout, tokenUser }}
        >
            {children}
        </ClientContext.Provider>
    )
}