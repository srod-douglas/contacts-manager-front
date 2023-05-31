import { useContext, useState } from 'react'
import { ClientContext } from '../../contexts/client';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from '../../components/Validators/SchemaLogin'
import { useForm } from 'react-hook-form';
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';
// import blackNeural from '../../public/assets/background/black-neural.jpg'

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
            <main id='login' className='bg-black-neural bg-top container flex flex-col h-full max-h-screen max-w-full justify-center m-0 select-none' >
                    
                <section className='flex flex-col h-2/3 max-h-screen max-w-full w-full justify-center items-center'>
                    <form noValidate onSubmit={handleSubmit(submit)} className='backdrop-blur-md w-3/12 container flex flex-col justify-around  h-full max-h-screen p-6  shadow-2xl shadow-gray-950 rounded-xl'>

                    <div className='flex justify-center gap-1 place-items-center text-center'>
                            <h3 className='text-center text-gray-300 sm:text-xl font-normal dark:text-slate-200 opacity-90 antialiased'>Clients Manager | </h3>

                            <h4  className='mt-1 text-center text-gray-300 sm:text-base font-thin dark:text-slate-200 opacity-90 tracking-widest antialiased'> login</h4>
                        </div>

                        <input placeholder='email' {...register('email')} className='h-12 pl-3 placeholder-gray-500  rounded bg-black outline-none text-gray-300 ring-black caret-slate-500 ' />
                        {errors.email && <span className='text-red-500 -mt-14 ml-3'>{errors.email.message}</span>}

                        <input placeholder='password' type={view ? 'text' : 'password'} {...register('password')} className='h-12 pl-3 placeholder-gray-500  rounded bg-black outline-none text-gray-300 ring-black caret-slate-500' />
                        {errors.password && <span className='text-red-500 -mt-14 ml-3'>{errors.password.message}</span>}
                        
                        {
                            view ? <EyeIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8 stroke-green-600 opacity-80' /> : <EyeOffIcon onClick={() => changeIcon()} className='h-7 w-7 absolute top-2/4 left-3/4 ml-8 stroke-red-900 opacity-50' />
                        }

                        <button type='submit' className='h-12 w-full text-gray-300 self-center bg-gradient-to-t from-slate-950 opacity-50 hover:opacity-100'>login</button>

                        <div className='flex flex-col h-1.5 self-center justify-center place-items-center gap-5'>
                            <span className='text-gray-300 '>forgot password? <Link className='text-gray-300 hover:underline hover:text-white decoration-white ' to={'/forgot'}>redefine here</Link></span>
                            <span className='text-gray-300'>don't have an account? <Link to='/register' className='text-gray-300 hover:underline hover:text-white'>sign up</Link></span>
                        </div>
                    </form>
                </section>

            </main>
        </>
    )
}
export default Login