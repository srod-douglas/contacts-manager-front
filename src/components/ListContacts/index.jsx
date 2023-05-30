import { useContext } from "react"
import { ContactContext } from "../../contexts/contact"

export const ListContacts = () => {
    const { allContacts, setAllContacts, listContacts } = useContext(ContactContext)

    return(
        <ul>
            {allContacts && allContacts.map((contact) => (

                <li key={contact.id}>

                    <h4>{contact.id}</h4>
                    <h4>{contact.first_name}</h4>
                    <h4>{contact.last_name}</h4>
                    <h4>{contact.email}</h4>
                    <h4>{contact.phone}</h4>
                    <h4>{contact.created_at}</h4>

                </li>  
            ))}
            {allContacts && (
                <button onClick={() => setAllContacts(null)}>close</button>
            )}
            {allContacts?.length === 0 && (
                <span>You don't have contacts :( </span>
            )}
        </ul>
    )
}