import { useContext, useEffect, useState } from "react"

import { ClientContext } from "../../../contexts/client"
import { UpdateProfile } from "./UpdateProfile"
import { DeleteProfile } from "./DeleteProfile"
import './styles.css'

import { CheckCircleIcon, DeviceMobileIcon, FingerPrintIcon, MailIcon, UserCircleIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, ExclamationIcon, CakeIcon } from "@heroicons/react/outline"

export const Profile = () => {
    const { clientInfos } = useContext(ClientContext)

    const clientLocal = JSON.parse(localStorage.getItem('@client'))

    const [isDeleteMenu, setDeleteMenu] = useState(false)
    const [isUpdateMenu, setUpdateMenu] = useState(false)

    const convertDate = () => {

        const realDate = new Date(clientLocal.created_at)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const year = realDate.getFullYear()
        const month = months[realDate.getMonth()]
        const day = realDate.getDate()

        return `${month} ${day}, ${year}`
    }

    useEffect(() => {
        clientInfos(+clientLocal.id)
        return () => {}
    }, [])

    const handleDeleteMenu = () => {
        if(isDeleteMenu){
            setDeleteMenu(false)
        }else{
            setDeleteMenu(true)
            setUpdateMenu(false)
        }
    }

    const handleUpdateMenu = () => {
        if(isUpdateMenu){
            setUpdateMenu(false)
        }else{
            setUpdateMenu(true)
            setDeleteMenu(false)
        }
    }

    return (
        <section className='flex'>
            <div className="container-profile">

                <div className='container-left'>
                    <div className="container-left-infos">

                        <UserCircleIcon className="icon-client" />

                        <div className="container-infos">
                            <div className="flex gap-2 w-2/5">
                                <FingerPrintIcon className="icon-white" />
                                <h4 className="texts">{clientLocal.id}</h4>
                                <CheckCircleIcon className="icon-green"/>
                            </div>
                        </div>

                        <div className="container-infos">
                            <CheckCircleIcon className="icon-white" />
                            <h4 className="texts">{clientLocal.first_name}</h4>
                            {clientLocal.last_name &&
                                (
                                    <>
                                        <h4 className="texts">{clientLocal.last_name}</h4>
                                        <CheckCircleIcon className="icon-green"/>
                                    </>
                                )
                            }
                        </div>

                        <div className='container-infos'>
                            <MailIcon className="icon-white" />
                            <h4 className="texts">{clientLocal.email}</h4>
                            <CheckCircleIcon className="icon-green"/>
                        </div>
                        
                        <div className='container-infos'>
                            <DeviceMobileIcon className="icon-white" />
                            <h4 className="texts">{clientLocal.phone ? clientLocal.phone : 'not informed'}</h4>
                            {!clientLocal.phone ? 
                                (
                                    <ExclamationIcon className="icon-error" />
                                ) : (
                                    <CheckCircleIcon className="icon-green"/>
                                )
                            }
                        </div>

                        <div className='container-infos'>
                            <CakeIcon className="icon-white" />
                            <h4 className="texts">{convertDate()}</h4>
                            <CheckCircleIcon className="icon-green"/>
                        </div>
                    </div>
                </div>

                <div className='container-right'>
                    <div className='container-right-infos'>

                        <div onClick={handleUpdateMenu} className='container-right-titles'>
                            <h2 className='texts'>Update account</h2>
                            {
                                isUpdateMenu ?
                                    (
                                        <ChevronDoubleUpIcon className="icon-white"/>
                                    ) : (
                                        <ChevronDoubleDownIcon className="icon-white"/>
                                    )
                            }
                        </div>

                        <div onClick={handleDeleteMenu} className='container-right-titles'>
                            <h2 className='texts'>Delete account</h2>
                                {
                                    isDeleteMenu ?
                                        (
                                            <ChevronDoubleUpIcon className="icon-white"/>
                                        ) : (
                                            <ChevronDoubleDownIcon className="icon-white"/>
                                        )
                                }
                        </div>
                    </div>
                    {isDeleteMenu && (
                        <DeleteProfile handleDeleteMenu={handleDeleteMenu} />
                    )}

                    {isUpdateMenu && (
                        <UpdateProfile setUpdateMenu={setUpdateMenu}/>
                    )}
                </div>
            </div>
        </section>
    )
}