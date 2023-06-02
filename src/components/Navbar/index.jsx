import { LogoutIcon } from "@heroicons/react/outline"
import { Link, useNavigate } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { useContext } from "react"
import { ContactContext } from "../../contexts/contact"
import { ListContacts } from "../ListContacts"
import logo from '../../public/assets/logo/5.png'
import { UpdateContact } from "../UpdateContact"
// import { UpdateContact } from "../UpdateContact"

export const NavSide = () => {
    const navigate = useNavigate()
  const { clientLogout } = useContext(ClientContext)
  const { listContacts, updateContact, isOpenRead, setIsOpenRead, isOpenUpdate, setIsOpenUpdate } = useContext(ContactContext)
  // const { isReadOpen, setIsReadOpen, isCreateOpen, setIsCreateOpen, isUpdateOpen, setIsUpdateOpen, isDeleteOpen, setIsDeleteOpen} = useContext(ContactContext)

  // const ensureMenu = (menu) => {
  //   if(menu === 'all') setIsReadOpen(!isReadOpen)
  //   if(menu === 'create') setIsCreateOpen(!isCreateOpen)
  //   if(menu === 'update') setIsUpdateOpen(!isUpdateOpen)
  //   if(menu === 'delete') setIsDeleteOpen(!isDeleteOpen)
    
  // }
    const test = (value) => {
        if(value === 'all'){
            setIsOpenRead(!isOpenRead)
            navigate('dashboard')
        }
        if(value === 'update'){
            setIsOpenUpdate(!isOpenUpdate)
            navigate('update-contacts')
        }
        if(value === 'all'){
            setIsOpenRead(!isOpenRead)
            navigate('dashboard/delete-contact')
        }
    }

  return (
    <header id='redefine' className='animate-[navLeft_3s_ease-out_1] delay-1000 translate-x-0 flex flex-col justify-around w-36 shadow-lg shadow-white absolute left-0 top-0 h-full'>
                <div className='flex flex-col items-center self-center justify-between w-20 h-screen'>
                    <div>
                        <div onClick={() => listContacts()} className='flex flex-col w-full h-2/5 cursor-pointer'>
                            <img className='mt-16' src={logo} />
                            <span  className=' text-center text-white'>Contacts Manager</span>
                        </div>
                    </div>
                    <nav className='flex flex-col justify-around h-2/5 w-20 place-items-center'>
                        <button className='-mt-16 text-white' onClick={() => test('update')}>update contact</button>

                        <Link className='-mt-16 text-white' to={'/profile'}>profile</Link>
                        <Link className='-mt-16 text-white' to={'profile/contacts'}>contacts</Link>
                        <LogoutIcon className='h-7 w-7 -mt-16 stroke-white' onClick={() => clientLogout()}>logout </LogoutIcon>
                    </nav>
                </div>
            </header>
  )
}