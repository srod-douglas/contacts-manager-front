import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form";
import { ContactContext } from "../../contexts/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaId } from "../Validators/SchemaId";

export const CardContact = () => {
    const { readContact, contact, id, setId } = useContext(ContactContext)

    const { register, handleSubmit, reset } = useForm({
        resolvers: yupResolver(SchemaId)
    })

    const submit = async (data) => {
        setId(+data.id)
        reset()
    }

    useEffect(() => {
        const token = localStorage.getItem('@token')
        if(token && id){
            readContact(id)
        }
    }, [id])


    return(
        <>
            <form onSubmit={handleSubmit(submit)}>
                <fieldset>
                    <input placeholder='id contact' type='number' {...register("id")} />
                    <button>search</button>
                </fieldset>
            </form>
            {contact && id && (
                <div>
                    <h4>{contact.id}</h4>
                    <h4>{contact.first_name}</h4>
                    <h4>{contact.last_name}</h4>
                    <h4>{contact.email}</h4>
                    <h4>{contact.phone}</h4>
                    <h4>{contact.created_at}</h4>
                    <button onClick={() => setId(false)}>close</button>
                </div>  
            )}
        </>
    )
}