import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaCreateContact } from '../../Validators/SchemaCreateContact'
import { useContext } from "react";
import { ContactContext } from "../../../contexts/contact";


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
            <section >
                <form className='animate-[fade_.5s_ease-in]' onSubmit={handleSubmit(submit)}>
                    <div className='form-div-titles'>
                        <h2 className='text-center text-gray-300 text-xl font-extralight dark:text-slate-200 opacity-90'>Have a new contact? Go create!</h2>
                    </div>

                    <fieldset className='h-1/3'>
                        <input className='input' placeholder='name' {...register("first_name")} />
                        {errors.name && <span className='input--error'>{errors.name.message}</span>}
                    </fieldset>
                    <fieldset className='h-1/3'>
                        <input className='input' placeholder='last name' {...register("last_name")} />
                        {errors.last_name && <span className='input--error'>{errors.last_name.message}</span>}
                    </fieldset>
                    <fieldset className='h-1/3'>
                        <input className='input' placeholder='email' {...register("email")} />
                        {errors.email && <span className='input--error'>{errors.email.message}</span>}
                    </fieldset>
                    <fieldset className='h-1/3'>
                        <input className='input' placeholder='phone' {...register("phone")} />
                        {errors.phone && <span className='input--error'>{errors.phone.message}</span>}
                    </fieldset>
                
                    <button className='w-full h-1/6 rounded-lg bg-transparent text-green-400 text-xl transition ease-in duration-200 hover:bg-green-700 hover:text-white' type='submit'>Create</button>
                </form>
            </section>
        </>
    )
}