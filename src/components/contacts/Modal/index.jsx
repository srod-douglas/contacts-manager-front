import { useContext } from "react"
import { ContactContext } from "../../../contexts/contact"
import { Link } from "react-router-dom"
import './styles.css'

export const ModalDelete = () => {

    const { deleteContact, setIsDelete, isDelete } = useContext(ContactContext)

    const confirmDelete = async (info) => {
        info === 'true' ? await deleteContact(isDelete) : setIsDelete(null)
    }

    return (
        <div className='container-modal'>
            <div className='body-modal'>
                <div className='div-titles'>
                    <h2>Are you sure you want to delete this user?</h2>
                    <h3>This action is irreversible<span></span></h3>
                </div>
                <div className='div-bts'>
                    <Link to={'/dashboard/contacts'} onClick={() => confirmDelete('true')}>Delete</Link>
                    <Link to={'/dashboard/contacts'} onClick={() => confirmDelete('false')}>Cancel</Link>
                </div>
            </div>
        </div>
    )
}