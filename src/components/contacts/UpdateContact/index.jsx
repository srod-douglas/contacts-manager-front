import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaUpdateContact } from '../../Validators/SchemaUpdateContact'
import { useContext, useEffect } from "react";
import { ContactContext } from '../../../contexts/contact';

export const UpdateContact = () => {
    const { updateContact } = useContext(ContactContext)

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

    useEffect(() => {
        return () => console.log('desmontou o Update.')
    }, [])

    return (
            <section>
                <form className='animate-[fade_.5s_ease-in]' onSubmit={handleSubmit(submit)}>
                <div className='form-div-titles'>
                        <h2 className='text-center text-gray-300 text-xl font-extralight dark:text-slate-200 opacity-90'>Update your contact</h2>
                    </div>
                    <fieldset>
                        <input className='input appearance-none' placeholder='ID contact' {...register("id")} type="number" />
                        {errors.id && <span>{errors.id.message}</span>}
                    </fieldset>

                    <fieldset>
                        <input className='input' placeholder='name' {...register("first_name")} />
                    </fieldset>

                    <fieldset>
                        <input className='input' placeholder='last name' {...register("last_name")} />
                        {errors.last_name && <span>{errors.last_name.message}</span>}
                    </fieldset>

                    <fieldset>
                        <input className='input' placeholder='email' {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </fieldset>

                    <fieldset>
                        <input className='input' placeholder='phone' {...register("phone")} />
                        {errors.phone && <span>{errors.phone.message}</span>}
                    </fieldset>

                    <button type='button' id='btn-login' onClick={handleSubmit(submit)}>update</button>
                </form>
            </section>
    )
}