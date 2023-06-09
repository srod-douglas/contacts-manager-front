import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../contexts/client"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SchemaRegister } from "../../components/Validators/SchemaRegister";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import '../../styles/register/index.css'

function Register () {
    const { clientRegister } = useContext(ClientContext)
    const [viewPwd, setViewPwd] = useState(false)
    const [viewConfirmPwd, setViewConfirmPwd] = useState(false)
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaRegister)
    })
    const changeIcon = (element) => {
        element === 'pwd' ? setViewPwd(!viewPwd) : setViewConfirmPwd(!viewConfirmPwd)
    }

    const submit = async (data) => {
        delete data.confirm_password

        const { phone, ...rest } = data
        phone === "" ? await clientRegister(rest) : await clientRegister(data)
        reset()
    }

    return (
        <>
            <main className='animate-[fade_1s_ease-in] bg-register bg-cover container flex flex-col h-full max-h-screen max-w-full justify-center m-0  from-slate-950 to-slate-700'>

                <section className='flex flex-col h-5/6 max-h-screen max-w-full justify-center items-center'>

                    <form onSubmit={handleSubmit(submit)} className='backdrop-blur-lg w-3/12 container flex flex-col justify-around  h-full max-h-screen p-6 shadow-2xl shadow-black rounded-xl'>

                        <div className='flex justify-center gap-1 place-items-center text-center'>
                            <h3 className='text-center text-gray-300 sm:text-xl font-normal dark:text-slate-200 opacity-90'>Clients Manager | </h3>

                            <h4  className='text-center text-gray-300 sm:text-base font-thin dark:text-slate-200 opacity-90 tracking-widest'> new register</h4>
                        </div>

                        <input placeholder='first name' type='text' {...register("first_name")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500'/>

                        {errors.first_name && <span className='text-red-500 ml-3 -mt-2'>{errors.first_name.message}</span>}

                        <input placeholder='last name' type='text' {...register("last_name")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500 '/>

                        {errors.last_name && <span className='text-red-500 ml-3 -mt-2'>{errors.last_name.message}</span>}

                        <input placeholder='phone' type='number' {...register("phone")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500 '/>

                        {errors.phone && <span className='text-red-500 ml-3 -mt-2'>{errors.phone.message}</span>}

                        <input placeholder='email' {...register("email")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500 '/>

                        {errors.email && <span className='text-red-500 ml-3 -mt-2'>{errors.email.message}</span>}
                        <div>
                            <input placeholder='password' type={viewPwd ? 'text' : 'password'} {...register("password")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500 '/>
                            {
                                viewPwd ? <EyeIcon onClick={() => changeIcon('pwd')} className='view-pwd--opened' /> : <EyeOffIcon onClick={() => changeIcon('pwd')} className='view-pwd--closed' />
                            }
                        </div>
                        {errors.password && <span className='text-red-500 ml-3 -mt-2'>{errors.password.message}</span>}
                        <div>
                            <input placeholder='confirm password' type={viewConfirmPwd ? 'text' : 'password'} {...register("confirm_password")} className='h-12 pl-3 placeholder-gray-500  rounded bg-neutral-950 outline-none text-gray-300 ring-black caret-slate-500 ' />
                            {
                                viewConfirmPwd ? <EyeIcon onClick={() => changeIcon('confirmPwd')} className='view-pwd--opened' /> : <EyeOffIcon onClick={() => changeIcon('confirmPwd')} className='view-pwd--closed' />
                            }
                        </div>
                        {errors.confirm_password && <span className='text-red-500 ml-3 -mt-2'>{errors.confirm_password.message}</span>}

                        <button className='h-12 w-full rounded-xl text-gray-300 self-center bg-gradient-to-t from-neutral-900 opacity-50 hover:opacity-100'>register</button>

                        <div className='flex flex-col self-center justify-center place-items-center gap-5'>

                            <span className='text-gray-300'>or, already have an account?</span>
                            <Link to={'/login'} className='text-gray-300 hover:underline hover:text-white'>login here</Link>

                        </div>


                    </form>
                </section>
            </main>
        </>
    )
}
export default Register