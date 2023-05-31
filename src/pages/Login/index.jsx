import { useContext } from 'react'
import { ClientContext } from '../../contexts/client';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from '../../components/Validators/SchemaLogin'
import { useForm } from 'react-hook-form';
import { EyeIcon } from '@heroicons/react/outline';


const Login = () => {
    const { clientLogin } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaLogin)
    })

    const submit = async (formData) => {
        await clientLogin(formData)
        reset()
    }

    return(
        <>
            <main id='login' class='container flex flex-col h-full max-h-screen max-w-full justify-center m-0 bg-gradient-to-t from-slate-950 to-slate-700'>
                    
                <section class='flex flex-col h-4/5 max-h-screen max-w-full justify-center items-center'>
                    <form noValidate onSubmit={handleSubmit(submit)} class=' w-3/12 container flex flex-col justify-around  h-full max-h-screen p-9 bg-slate-800 drop-shadow-2xl rounded-xl'>

                        <h2 class='text-center text-2xl text-gray-300 sm:text-3xl font-extrabold dark:text-slate-200 opacity-90'>Clients Manager</h2>

                        <input placeholder='email' {...register('email')} class='h-12 pl-3 placeholder-gray-500 placeholder-opacity-100 rounded bg-slate-900 outline-none text-gray-300 ring-black caret-slate-500 ' />
                        {errors.email && <span class='text-red-500 -mt-16 ml-3'>{errors.email.message}</span>}

                        <input placeholder='password' type='password' {...register('password')} class='h-12 pl-3 placeholder-gray-500 placeholder-opacity-100 rounded bg-slate-900 outline-none text-gray-300 ring-black caret-slate-500' />
                        {errors.password && <span class='text-red-500 -mt-16 ml-3'>{errors.password.message}</span>}

                        <EyeIcon className='h-7 w-7 absolute top-2/4 left-3/4 ml-8'/>

                        <button type='submit' class='h-12 w-full text-gray-300 self-center bg-gradient-to-t from-slate-950 opacity-50 hover:opacity-100'>login</button>
                        <div class='flex flex-col h-1.5 self-center justify-center place-items-center gap-5'>
                            <span class='text-gray-300'>forgot password? <Link class='text-gray-300 hover:underline hover:text-white decoration-white ' to={'/forgot'}>redefine here</Link></span>
                            <span class='text-gray-300'>don't have an account? <Link to='/register' class='text-gray-300 hover:underline hover:text-white'>sign up</Link></span>
                        </div>
                    </form>
                </section>

            </main>
        </>
    )
}
export default Login