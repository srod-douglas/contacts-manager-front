import { useContext } from "react"
import { ContactContext } from "../../../contexts/contact"
import { Link } from "react-router-dom"

export const ModalDelete = ({ contactId, setterDelete }) => {

    const { deleteContact, setIsDelete } = useContext(ContactContext)

    const confirmDelete = async () => {
        setterDelete(null)
        await deleteContact(contactId)
    }

    return (
        <div className='animate-[fade_.3s_ease-in] w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 z-10'>
            <div className='w-1/5 h-1/2 p-4 bg-black bg-opacity-80 flex flex-col items-center justify-center border-solid border-2 rounded-lg border-black'>
                <div className='w-full h-1/3 flex flex-col justify-between text-center'>
                    
                    <h2 className='text-white text-2xl relative'>Are you sure you want to delete this user?</h2>
                    <h3 className='text-red-600 text-base'>This action is irreversible<span class="animate-ping absolute inline-flex w-2 h-2 rounded-full bg-red-600 opacity-75"></span></h3>
                </div>
                <div className='w-full h-1/2 flex items-center gap-2 justify-center'>
                    <button className='bg-red-300 transition ease-in hover:bg-red-500 text-white h-1/4 w-1/2 rounded-lg' onClick={() => confirmDelete()}>Delete</button>
                    <Link to={'/dashboard/contacts'} onClick={setIsDelete(null)} className='animate-pulse flex bg-zinc-800 text-white h-1/4 w-1/2 items-center justify-center rounded-lg hover:animate-none'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}