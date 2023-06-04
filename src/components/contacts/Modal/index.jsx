import { useContext } from "react"
import { ContactContext } from "../../../contexts/contact"
import { Link } from "react-router-dom"
import './styles.css'

export const ModalDelete = ({ contactId, setterDelete }) => {

    const { deleteContact, setIsDelete } = useContext(ContactContext)

    const confirmDelete = async () => {
        setterDelete(null)
        await deleteContact(contactId)
    }

    return (
        <div className='container-modal'>
            <div className='body-modal'>
                <div className='div-titles'>
                    
                    <h2>Are you sure you want to delete this user?</h2>
                    <h3>This action is irreversible<span></span></h3>
                </div>
                <div className='div-bts'>
                    <button onClick={() => confirmDelete()}>Delete</button>
                    <Link to={'/dashboard/contacts'} onClick={setIsDelete(null)}>Cancel</Link>
                </div>
            </div>
        </div>
    )
}