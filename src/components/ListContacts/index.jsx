import { useContext, useEffect } from "react"
import { ContactContext } from "../../contexts/contact"
import { UserCircleIcon } from "@heroicons/react/outline"
import './style.css'
export const ListContacts = () => {
    const { allContacts, setAllContacts, listContacts } = useContext(ContactContext)
    useEffect(() => {
        return () => console.log('desmontou o List')
    }, [])
    return(
        <>  
            <h1 className='text-white '>Your registered contacts</h1>
            <ul className='list h-3/5 w-9/12 grid grid-cols-4 gap-4 px-16 pt-8 overflow-y-auto no-scrollbar snap-y rounded-3xl ' >
                {allContacts && allContacts.map((contact) => (

                    <li className='animate-[fade_1s_ease-in] h-full p-4 snap-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg transition ease-in delay-0 hover:!opacity-100 hover:scale-110 z-50' key={contact.id}>
                        <div className='flex'>

                        <UserCircleIcon className='h-20 stroke-1 stroke-white'/>

                        <div className='h-full w-full flex flex-col self-center'>
                            <h4 className='text-white '>{contact.id}</h4>
                            <h4 className='text-white'>Name ⇨ {contact.first_name}</h4>
                        </div>

                        </div>

                        <h4 className='text-white'>{contact.email}</h4>
                        <h4 className='text-white'>{contact.phone}</h4>

                    </li>  
                ))}
                {allContacts?.length === 0 && (
                    <span>You don't have contacts :( </span>
                    )}
                    <div className='blur-bottom'></div>
            </ul>
            {allContacts && (
                <div className='flex flex-col h-16 -mb-16 w-1/5 justify-end'>
                    <button className='h-12 w-full text-gray-300 self-center bg-gradient-to-t from-neutral-500 opacity-50 hover:opacity-100 rounded-xl'onClick={() => setAllContacts(null)}>close</button>
                    {/* <button className='h-12 w-full text-gray-300 self-center bg-gradient-to-t from-neutral-500 opacity-50 hover:opacity-100 rounded-xl'onClick={() => setAllContacts(null)}>close</button> */}
                </div>
                
            )}
        </>
    )
}