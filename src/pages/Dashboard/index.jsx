import { useContext } from "react"
import { UpdateContact } from '../../components/UpdateContact'
import { ListContacts } from "../../components/ListContacts"
import { CardContact } from "../../components/CardContact"
import { ContactContext } from "../../contexts/contact"
import { NavSide } from "../../components/Navbar"

function Dashboard() {

    const { listContacts, isOpenRead, isOpenUpdate, setIsOpenRead } = useContext(ContactContext)
    
    return (
        <div className='animate-[fade_1s_ease-in] bg-dashboard bg-blend-darken bg-cover static'>
            <NavSide/>
            <main className=' flex items-center self-center justify-around h-full'>
                <div className='w-full h-screen'>
                    <section className='h-screen py-16 w-full flex justify-center'>
                        {isOpenRead && <ListContacts />}
                        {/* <CreateContact /> */}
                    </section>
                    <section className='h-screen py-16 w-full flex justify-center'>
                        {isOpenUpdate && <UpdateContact />}
                        {/* <CreateContact /> */}
                    </section>
                    {/* <section>
                        <h2 className='text-white'>Update contact</h2>
                        <UpdateContact />
                    </section>
                    <section>
                        <h2 className='text-white'>View contact by ID</h2>
                        <CardContact />
                    </section>
                    <section>
                        <button onClick={() => listContacts()}>Or, view all contacts?</button>
                        {listContacts && (
                            <ListContacts />
                        )}

                    </section> */}

                </div>
            </main>
        </div>
    )
}

export default Dashboard