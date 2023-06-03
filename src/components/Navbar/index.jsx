import { LogoutIcon } from "@heroicons/react/outline"
import { Link, useNavigate } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { useContext } from "react"
import logo from '../../public/assets/logo/5.png'


export const NavSide = () => {
  const { clientLogout } = useContext(ClientContext)

    const navigate= useNavigate()

    return (
        <header id='redefine' className='animate-[navLeft_3s_ease-out_1] delay-1000 translate-x-0 flex flex-col justify-around w-36 shadow-lg shadow-white absolute left-0 top-0 h-full'>
                <div className='flex flex-col items-center self-center justify-between w-20 h-screen'>

                    <div>
                        <div onClick={() => navigate('')} className='flex flex-col w-full h-2/5 cursor-pointer'>
                            <img className='mt-16' src={logo} />
                            <span  className=' text-center text-white'>Contacts Manager</span>
                        </div>
                    </div>

                    <nav className='flex flex-col justify-around h-2/5 w-20 place-items-center'>
                        <Link className='-mt-16 text-white' to={'new-contact'}>new contact</Link>
                        <Link className='-mt-16 text-white' to={'contacts'}>all contacts</Link>
                        <Link className='-mt-16 text-white' to={'update-contact'}>update contact</Link>
                        <Link className='-mt-16 text-white' to={'delete-contact'}>delete contact</Link>

                        <LogoutIcon className='h-7 w-7 -mt-16 stroke-white' onClick={() => clientLogout()}>logout </LogoutIcon>

                    </nav>
                </div>
            </header>
    )
}