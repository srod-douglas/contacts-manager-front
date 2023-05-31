import { useContext, useState } from 'react'
import { ClientContext } from '../../contexts/client';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from '../../components/Validators/SchemaLogin'
import { useForm } from 'react-hook-form';
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';


const Login = () => {

    const [view, setView] = useState(false)
    const { clientLogin } = useContext(ClientContext)

    const changeIcon = () => {
        setView(!view)
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(SchemaLogin)
    })

    const submit = async (formData) => {
        await clientLogin(formData)
    }

    return(
        <>
            <main id='login' className='container flex flex-col h-full max-h-screen max-w-full justify-center m-0 bg-gradient-to-t from-slate-950 to-slate-700'>
                    
                <section className='flex flex-col h-4/5 max-h-screen max-w-full justify-center items-center'>
                    <form noValidate onSubmit={handleSubmit(submit)} className=' w-3/12 container flex flex-col justify-around  h-full max-h-screen p-9 bg-slate-800 drop-shadow-2xl rounded-xl'>

                        <h2 className='text-center text-2xl text-gray-300 sm:text-3xl font-extrabold dark:text-slate-200 opacity-90'>Clients Manager</h2>

                        <input placeholder='email' {...register('email')} className='h-12 pl-3 placeholder-gray-500 placeholder-opacity-100 rounded bg-slate-900 outline-none text-gray-300 ring-black caret-slate-500 ' />
                        {errors.email && <span className='text-red-500 -mt-16 ml-3'>{errors.email.message}</span>}
                        {/* {
                            view && errors.password && errors.email ? <EyeOffIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8' /> : <EyeIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8' />
                        } */}

                        <input placeholder='password' type={view ? 'text' : 'password'} {...register('password')} className='h-12 pl-3 placeholder-gray-500 placeholder-opacity-100 rounded bg-slate-900 outline-none text-gray-300 ring-black caret-slate-500' />
                        {errors.password && <span className='text-red-500 -mt-16 ml-3'>{errors.password.message}</span>}
                        
                        {
                            view ? <EyeOffIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8' /> : <EyeIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8' />
                        }

                        <button type='submit' className='h-12 w-full text-gray-300 self-center bg-gradient-to-t from-slate-950 opacity-50 hover:opacity-100'>login</button>
                        <div className='flex flex-col h-1.5 self-center justify-center place-items-center gap-5'>
                            <span className='text-gray-300'>forgot password? <Link className='text-gray-300 hover:underline hover:text-white decoration-white ' to={'/forgot'}>redefine here</Link></span>
                            <span className='text-gray-300'>don't have an account? <Link to='/register' className='text-gray-300 hover:underline hover:text-white'>sign up</Link></span>
                        </div>
                    </form>
                </section>

            </main>
        </>
    )
}
export default Login