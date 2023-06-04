import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SchemaUpdateClient } from '../../../Validators/SchemaUpdateClient' 
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/outline"
import { ClientContext } from "../../../../contexts/client"
import './styles.css'

export const UpdateProfile = ({ setUpdateMenu }) => {
    const { clientInfos, updateClient } = useContext(ClientContext)
    const clientLocal = JSON.parse(localStorage.getItem('@client'))

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaUpdateClient)
    })

    const submit = async (data) => {
        Object.keys(data).forEach((key) => {
            if(data[key] === '') delete data[key]
        })

        await updateClient(clientLocal.id, data)
        setUpdateMenu(false)

        await clientInfos(clientLocal.id)
        reset()
    }

    return (

        <form className='form-update-client' onSubmit={() => handleSubmit(submit)}>

            <div className='form-update-div-titles'>
                <h2>Update your account</h2>
            </div>

            <fieldset>
                <input className='input' placeholder={clientLocal.first_name} {...register("first_name")} />
                {errors.first_name && <span>{errors.last_name.message}</span>}
                {!clientLocal.first_name ?
                    (
                        <ExclamationIcon className="icon-error" />
                    ) : (
                        <CheckCircleIcon className="icon-accept"/>
                    )
                }
            </fieldset>

            <fieldset>
                <input className='input' placeholder={clientLocal.last_name ? clientLocal.last_name : 'add your last name'} {...register("last_name")} />
                {errors.last_name && <span>{errors.last_name.message}</span>}
                {!clientLocal.last_name ? 
                    (
                        <ExclamationIcon className="icon-error" />
                    ) : (
                        <CheckCircleIcon className="icon-accept"/>
                    )
                }
            </fieldset>

            <fieldset>
                <input className='input' placeholder={clientLocal.email} {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
                {!clientLocal.email ? 
                    (
                        <ExclamationIcon className="icon-error" />
                    ) : (
                        <CheckCircleIcon className="icon-accept"/>
                    )
                }
            </fieldset>

            <fieldset>
                <input className='input' type='number' placeholder={clientLocal.phone ? clientLocal.phone : 'add your phone'} {...register("phone")} />
                {errors.phone && <span>{errors.phone.message}</span>}
                {!clientLocal.phone || errors.phone ? 
                    (
                        <ExclamationIcon className="icon-error" />
                    ) : (
                        <CheckCircleIcon className="icon-accept"/>
                    )
                }
            </fieldset>

            <div className='div-buttons'>
                <button type='button' 
                    className='btn-update' 
                    onClick={handleSubmit(submit)}>
                        update
                    </button>

                <button type='button' 
                    className='btn-cancel' 
                    onClick={() => setUpdateMenu(false)}>
                        cancel
                </button>
            </div>

        </form>
    )
}