import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../../contexts/client"
import { CheckCircleIcon, DeviceMobileIcon, FingerPrintIcon, MailIcon, UserCircleIcon, TrashIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/outline"

export const Profile = () => {
    const { client, clientInfos } = useContext(ClientContext)

    const clientLocal = JSON.parse(localStorage.getItem('@client'))
    const [isDeleteMenu, setDeleteMenu] = useState(false)
    const [isUpdateMenu, setUpdateMenu] = useState(false)

    useEffect(() => {
        clientInfos(+clientLocal.id)
        return () => console.log('desmontou o component profile')
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
            <div
              className="animate-[fade_1s_ease-in] h-full w-2/4 p-4 flex bg-white bg-opacity-20 backdrop-blur-md rounded-lg transition ease-in delay-0 "
              key={clientLocal.id}
            >

                <div className='flex flex-col justify-around w-2/4'>
                

                    <div className="w-1/4 flex flex-col self-center">
                    <UserCircleIcon className="h-20 stroke-1 stroke-white" />
                        <div className="flex gap-2 w-1/2">
                            <div className="flex gap-2 w-2/5">
                                <FingerPrintIcon className="w-4 stroke-white" />
                                <h4 className="text-white ">{clientLocal.id}</h4>
                            </div>
                        </div>

                        <div className="flex gap-2 w-full">
                            <CheckCircleIcon className="w-4 stroke-white" />
                            <h4 className="text-white">{clientLocal.first_name}</h4>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <div className='flex'>
                            <MailIcon className="w-4 stroke-white" />
                            <h4 className="text-white">{clientLocal.email}</h4>
                        </div>
                        <div className='flex'>
                            <DeviceMobileIcon className="w-4 stroke-white" />
                            <h4 className="text-white">{clientLocal.phone}</h4>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-center justify-start w-2/4'>

                        <div className='w-full h-4 flex justify-start'>

                            <div onClick={handleUpdateMenu} className='w-2/4 flex items-center justify-around'>
                                <h2>Update account</h2>
                                {
                                    isUpdateMenu ?
                                        (
                                            <ChevronDoubleUpIcon className="w-4 stroke-white"/>
                                        ) : (
                                            <ChevronDoubleDownIcon className="w-4 stroke-white"/>
                                        )
                                }
                            </div>

                            <div onClick={handleDeleteMenu} className='w-2/4 flex items-center justify-around'>

                                    <h2>Delete account</h2>
                                        {
                                            isDeleteMenu ?
                                                (
                                                    <ChevronDoubleUpIcon className="w-4 stroke-white"/>
                                                ) : (
                                                    <ChevronDoubleDownIcon className="w-4 stroke-white"/>
                                                )
                                        }


                            </div>
                        </div>

                        {isDeleteMenu && (
                            <div className='flex flex-col items-center justify-around h-full'>
                                <h2 className='text-red-600'>are you sure?</h2>
                                <p>
                                    if you delete your account all your contacts will be lost
                                </p>
                                <button className='w-full h-1/6 rounded-lg bg-red-600 text-white'>
                                    delete my account
                                </button>
                                <button className='w-full h-1/6 rounded-lg bg-black text-white' onClick={() => setDeleteMenu(!isDeleteMenu)}>cancel</button>
                            </div>

                        )}
                        {isUpdateMenu && (
                            <div className='flex flex-col items-center justify-around h-full'>
                                <h2 className='text-red-600'>Ok! Let's update your user!</h2>

                                <button className='w-full h-1/6 rounded-lg bg-red-600 text-white'>
                                    update my user
                                </button>
                                <button className='w-full h-1/6 rounded-lg bg-black text-white' onClick={() => setUpdateMenu(!isUpdateMenu)}>cancel</button>
                            </div>

                        )}

                </div>
            </div>
        </section>
    )
}