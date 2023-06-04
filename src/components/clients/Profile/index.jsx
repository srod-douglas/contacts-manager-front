import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../../contexts/client"
import { CheckCircleIcon, DeviceMobileIcon, FingerPrintIcon, MailIcon, UserCircleIcon, TrashIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, ExclamationIcon, CakeIcon } from "@heroicons/react/outline"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SchemaUpdateClient } from '../../Validators/SchemaUpdateClient' 

export const Profile = () => {
    const { client, clientInfos, updateClient } = useContext(ClientContext)

    const clientLocal = JSON.parse(localStorage.getItem('@client'))
    const [isDeleteMenu, setDeleteMenu] = useState(false)
    const [isUpdateMenu, setUpdateMenu] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaUpdateClient)
    })

    const submit = async (data) => {
        Object.keys(data).forEach((key) => {
            if(data[key] === '') delete data[key]
        })

        await updateClient(clientLocal.id, data)
        setUpdateMenu(false)

        await clientInfos(clientLocal.id)
        reset()
    }

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
              className="animate-[fade_.5s_ease-in] h-full w-2/4 p-4 flex bg-black bg-opacity-20 backdrop-blur-md rounded-3xl transition ease-in delay-0 "
              key={clientLocal.id}
            >

                <div className='flex flex-col justify-around w-1/4'>
                
                    <div className="w-full h-full flex flex-col justify-around">
                        <UserCircleIcon className="h-26 stroke-1 stroke-white" />
                        <div className="flex gap-2 w-full">
                            <div className="flex gap-2 w-2/5">
                                <FingerPrintIcon className="w-4 stroke-white" />
                                <h4 className="text-white text-xl">{clientLocal.id}</h4>
                                <CheckCircleIcon className="w-4 stroke-green-400"/>
                            </div>
                        </div>

                        <div className="flex gap-2 w-full">
                            <CheckCircleIcon className="w-4 stroke-white" />
                            <h4 className="text-white text-xl">{clientLocal.first_name}</h4>
                            {clientLocal.last_name &&
                                (
                                    <>
                                        <h4 className="text-white text-xl">{clientLocal.last_name}</h4>
                                        <CheckCircleIcon className="w-4 stroke-green-400"/>
                                    </>
                                )
                            }
                        </div>

                        <div className='flex gap-2 w-full'>
                            <MailIcon className="w-4 stroke-white" />
                            <h4 className="text-white text-xl">{clientLocal.email}</h4>
                            <CheckCircleIcon className="w-4 stroke-green-400"/>
                        </div>
                        
                        <div className='flex gap-2 w-full'>
                            <DeviceMobileIcon className="w-4 stroke-white" />
                            <h4 className="text-white text-xl">{clientLocal.phone ? clientLocal.phone : 'not informed'}</h4>
                            {!clientLocal.phone ? 
                                (
                                    <ExclamationIcon className="w-4 stroke-red-600" />
                                ) : (
                                    <CheckCircleIcon className="w-4 stroke-green-400"/>
                                )
                            }
                        </div>

                        <div className='flex gap-2 w-full'>
                            <CakeIcon className="w-4 stroke-white" />
                            <h4 className="text-white text-xl">{convertDate()}</h4>
                            <CheckCircleIcon className="w-4 stroke-green-400"/>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-start w-3/4'>

                    <div className='w-full h-4 flex justify-start'>

                        <div onClick={handleUpdateMenu} className='w-2/4 flex items-center justify-around'>
                            <h2 className='text-white text-xl'>Update account</h2>
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

                                <h2 className='text-white text-xl'>Delete account</h2>
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
                        <div className='animate-[fade_.5s_ease-in] flex flex-col items-center justify-around h-full'>
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
                        <form className='animate-[fade_.5s_ease-in] max-w-full w-full backdrop-blur-none shadow-none' onSubmit={() => handleSubmit(submit)}>

                            <div className='form-div-titles w-full'>
                                <h2 className='text-center text-gray-300 text-xl font-extralight '>Update your contact</h2>
                            </div>

                            <fieldset>
                                <input className='input' placeholder={clientLocal.first_name} {...register("first_name")} />
                                {errors.first_name && <span>{errors.last_name.message}</span>}
                                {!clientLocal.first_name ?
                                    (
                                        <ExclamationIcon className="w-4 stroke-red-600 absolute top-4 right-4" />
                                    ) : (
                                        <CheckCircleIcon className="w-4 stroke-green-400 absolute top-4 right-4"/>
                                    )
                                }
                            </fieldset>

                            <fieldset>
                                <input className='input' placeholder={clientLocal.last_name ? clientLocal.last_name : 'add your last name'} {...register("last_name")} />
                                {errors.last_name && <span>{errors.last_name.message}</span>}
                                {!clientLocal.last_name ? 
                                    (
                                        <ExclamationIcon className="w-4 stroke-red-600 absolute top-4 right-4" />
                                    ) : (
                                        <CheckCircleIcon className="w-4 stroke-green-400 absolute top-4 right-4"/>
                                    )
                                }
                            </fieldset>

                            <fieldset>
                                <input className='input' placeholder={clientLocal.email} {...register("email")} />
                                {errors.email && <span>{errors.email.message}</span>}
                                {!clientLocal.email ? 
                                    (
                                        <ExclamationIcon className="w-4 stroke-red-600 absolute top-4 right-4" />
                                    ) : (
                                        <CheckCircleIcon className="w-4 stroke-green-400 absolute top-4 right-4"/>
                                    )
                                }
                            </fieldset>

                            <fieldset>
                                <input className='input' type='number' placeholder={clientLocal.phone ? clientLocal.phone : 'add your phone'} {...register("phone")} />
                                {errors.phone && <span>{errors.phone.message}</span>}
                                {!clientLocal.phone || errors.phone ? 
                                    (
                                        <ExclamationIcon className="w-4 stroke-red-600 absolute top-4 right-4" />
                                    ) : (
                                        <CheckCircleIcon className="w-4 stroke-green-400 absolute top-4 right-4"/>
                                    )
                                }
                            </fieldset>

                            <div className='flex h-2/6 justify-around'>
                                <button type='button' 
                                    className='h-full w-1/3 bg-lime-950 hover:bg-lime-900 text-white rounded-lg' 
                                    onClick={handleSubmit(submit)}>
                                        update
                                    </button>

                                <button type='button' 
                                    className='h-full w-1/3 bg-red-300 bg-opacity-50 hover:bg-red-500 rounded-lg text-white' 
                                    onClick={() => setUpdateMenu(false)}>
                                        cancel
                                </button>
                            </div>

                        </form>

                    )}

                </div>
            </div>
        </section>
    )
}