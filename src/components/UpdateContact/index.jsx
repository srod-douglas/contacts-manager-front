import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaUpdateContact } from "../../components/Validators/SchemaUpdateContact";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contact";

export const UpdateContact = () => {
    const { setContact, updateContact } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaUpdateContact)
    })

    const submit = async (data) => {
        Object.keys(data).forEach((key) => {
            if(data[key] === '') delete data[key]
        })
        updateContact(data)
        reset()
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit(submit)}>

                    <fieldset>
                        <input placeholder='ID contact' {...register("id")} type="number"/>
                        {errors.id && <span>{errors.id.message}</span>}
                    </fieldset>

                    <fieldset>
                        <input placeholder='name' {...register("first_name")} />
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

                    <button type='button' onClick={handleSubmit(submit)}>update</button>
                </form>
            </section>
        </>
    )
}