import { useContext } from "react"
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaId } from "../../../Validators/SchemaId";
import { toast } from "react-toastify";

export const CardContact = () => {
    const { readContact, contact, id, setId } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolvers: yupResolver(SchemaId)
    })

    const submit = async (data) => {
        if(+data.id === 0) {
            toast.warning('id not found')
            setId(null)
            return reset()
        }
        setId(+data.id)
    }

    return(
        <>
            <form onSubmit={handleSubmit(submit)}>
                <fieldset>
                    <input placeholder='id contact' type='number' {...register("id")} />
                    {errors.id && <span>{errors.id.message}</span>}
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