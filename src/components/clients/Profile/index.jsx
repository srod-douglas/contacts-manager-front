import { useContext } from "react"
import { ClientContext } from "../../../contexts/client"

export const Profile = () => {
    const { client } = useContext(ClientContext)
    console.log(client)
    return (
        <section>

        </section>
    )
}