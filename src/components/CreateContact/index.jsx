import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaCreateContact } from "../../components/Validators/SchemaCreateContact";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contact";


export const CreateContact = () => {
    const { createContact } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaCreateContact)
    })

    const submit = async (data) => {
        Object.keys(data).forEach((key) => {
            if(data[key] === '') delete data[key]
        })
        await createContact(data)
        reset()
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit(submit)}>
                    <h2 className='text-white'>Have a new contact? Go create!</h2>
                    <fieldset>
                        <input placeholder='name' {...register("first_name")} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </fieldset>
                    <fieldset>
                        <input placeholder='last name' {...register("last_name")} />
                        {errors.last_name && <span>{errors.last_name.message}</span>}
                    </fieldset>
                    <fieldset>
                        <input placeholder='email' {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </fieldset>
                    <fieldset>
                        <input placeholder='phone' {...register("phone")} />
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </fieldset>
                
                    <button type='submit'>create</button>
                </form>
            </section>
        </>
    )
}