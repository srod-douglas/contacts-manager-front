import { useContext } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { UpdateContact } from '../../components/UpdateContact'
import { ListContacts } from "../../components/ListContacts"
import { CreateContact } from "../../components/CreateContact"
import { CardContact } from "../../components/CardContact"
import { ContactContext } from "../../contexts/contact"

function Dashboard() {
    const { clientLogout } = useContext(ClientContext)
    const { listContacts } = useContext(ContactContext)

    return (
        <>
            <header id='redefine'>
                <div>
                    <span>Clients Manager</span>
                    
                </div>
                <nav>
                    <span>hello, user</span>
                    <Link to={'profile'}>profile </Link>
                    <Link to={'profile/contacts'}>manage contacts </Link>
                    <button onClick={() => clientLogout()}>logout </button>
                </nav>
            </header>
            <main>
                <section>
                    <h2>Have a new contact? Go create!</h2>
                    <CreateContact />
                </section>
                <section>
                    <h2>Update contact</h2>
                    <UpdateContact />
                </section>
                <section>
                    <h2>View contact by ID</h2>
                    <CardContact />
                </section>
                <section>
                    <button onClick={() => listContacts()}>Or, view all contacts?</button>
                    {listContacts && (
                        <ListContacts />
                    )}

                </section>
            </main>
        </>
    )
}

export default Dashboard