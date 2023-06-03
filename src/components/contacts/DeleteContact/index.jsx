import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../../contexts/contact";
import { useContext } from "react";
import { SchemaId } from '../../Validators/SchemaId';

export const DeleteContact = () => {
    const { deleteContact } = useContext(ContactContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaId)
    })

    const submit = async (data) => {
        Object.keys(data).forEach((key) => {
            if(data[key] === '') delete data[key]
            if(data[key] === 'e') delete data[key]
        })
        console.log(data.id)
        await deleteContact(data.id)
        reset()
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit(submit)}>
                    <div className='form-div-titles'>
                        <h2 className='text-center text-gray-300 text-xl font-extralight dark:text-slate-200 opacity-90'>Delete a contact</h2>
                    </div>
                    <fieldset>
                        <input className='input' type='number' autoComplete='off' placeholder='ID contact' {...register("id")} />
                        {errors.id && <span className='input--error'>{errors.id.message}</span>}
                    </fieldset>
                    <button id='btn-login' type='submit'>delete</button>
                </form>
            </section>
        </>
    )
}