import { LogoutIcon } from "@heroicons/react/outline"
import { Link, useNavigate } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { useContext } from "react"
import logo from '../../public/assets/logo/5.png'
import { PlusIcon, UsersIcon, ArrowsExpandIcon, TrashIcon } from '@heroicons/react/outline'

export const NavSide = () => {
  const { clientLogout } = useContext(ClientContext)

    const navigate= useNavigate()

    return (
        <header id='redefine' className='animate-[navLeft_3s_ease-out_1] delay-1000 translate-x-0 flex flex-col justify-around w-48 shadow-lg shadow-white absolute left-0 top-0 h-full'>
                <div className='flex flex-col items-center self-center justify-between w-full h-screen px-6'>

                    <div>
                        <div onClick={() => navigate('')} className='flex items-center flex-col w-full h-2/5 cursor-pointer'>
                            <img className='mt-16' src={logo} />
                            <span  className=' text-center text-white'>Contacts Manager</span>
                        </div>
                    </div>

                    <nav className='flex flex-col justify-around h-2/5 w-full place-items-center'>
                        <div className='w-full flex items-center justify-between'>
                            <UsersIcon  className="-mt-16 w-4 stroke-white"/>
                            <Link className='-mt-16 text-white' to={'contacts'}>All contacts</Link>
                        </div>

                        <div className='w-full flex items-center justify-between'>
                            <PlusIcon  className="-mt-16 w-4 stroke-white"/>
                            <Link className='-mt-16 text-white' to={'new-contact'}>New contact</Link> 
                        </div>

                        <div className='w-full flex items-center justify-between'>
                            <ArrowsExpandIcon  className="-mt-16 w-4 stroke-white"/>
                            <Link className='-mt-16 text-white' to={'update-contact'}>Update contact</Link>
                        </div>
                        
                        <div className='w-full flex items-center justify-between'>
                            <TrashIcon  className="-mt-16 w-4 stroke-white"/>
                            <Link className='-mt-16 text-white' to={'delete-contact'}>Delete contact</Link>
                        </div>
                        
                        <div className='w-full flex flex-col items-center justify-between'>
                            <LogoutIcon className='h-7 w-7 -mt-16 stroke-white cursor-pointer' onClick={() => clientLogout()} />
                            <span  className=' text-center text-white'>Logout</span>
                        </div>

                    </nav>
                </div>
            </header>
    )
}