import { useContext } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaRegister } from "../../components/Validators/SchemaRegister";

function Register () {
    const { clientRegister } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaRegister)
    })

    const submit = async (data) => {
        delete data.confirm_password

        const { phone, ...rest } = data

        phone === "" ? await clientRegister(rest) : await clientRegister(data)
        reset()
    }

    return (
        <>
            <main>
                <section>
                    <form onSubmit={handleSubmit(submit)}>
                        <h2>Clients Manager</h2>
                        <h3>New Register</h3>

                        <input placeholder='first name' {...register("first_name")} />
                        {errors.first_name && <span>{errors.first_name.message}</span>}

                        <input placeholder='last name' {...register("last_name")}/>
                        {errors.last_name && <span>{errors.last_name.message}</span>}

                        <input placeholder='phone' {...register("phone")}/>
                        {errors.phone && <span>{errors.phone.message}</span>}

                        <input placeholder='email' {...register("email")}/>
                        {errors.email && <span>{errors.email.message}</span>}

                        <input placeholder='password' {...register("password")} />
                        {errors.password && <span>{errors.password.message}</span>}

                        <input placeholder='confirm password' {...register("confirm_password")} />
                        {errors.confirm_password && <span>{errors.confirm_password.message}</span>}

                        <button>register</button>
                        <span>or, already have an account?</span>

                        <Link to={'/login'}>login here</Link>

                    </form>
                </section>
            </main>
        </>
    )
}
export default Register