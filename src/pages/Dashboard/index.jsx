import { useContext, useEffect } from "react"
import { NavSide } from "../../components/Navbar"
import { Outlet } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { Profile } from "../../components/clients/Profile"

function Dashboard() {

    const { tokenUser, clientLogout } = useContext(ClientContext)

    useEffect(() => {
        if(!tokenUser){
            clientLogout()
        }
        return () => console.log('desmontando context contact')
    }, [tokenUser])

    return (
        <div className='animate-[fade_1s_ease-in] bg-dashboard bg-blend-darken bg-cover static'>
            <NavSide/>
            <main className=' flex items-center self-center justify-around h-full'>
                <div className='w-full h-screen'>
                    <section className='h-screen py-16 w-full flex justify-center'>
                        <Outlet />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Dashboard