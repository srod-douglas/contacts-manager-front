import { useContext, useState } from 'react'
import { ClientContext } from '../../contexts/client';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from '../../components/Validators/SchemaLogin'
import { useForm } from 'react-hook-form';
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';
import logo from '../../public/assets/logo/5.png'
import logoLog from '../../public/assets/logo/6.png'
import '../../styles/login/index.css'

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
            <main className='bg-dashboard animate-[fade_1s_ease-in]'>

                <section >
                    <form noValidate onSubmit={handleSubmit(submit)} >

                        <div className='form-div-titles'>

                            <img className='logo' src={logo}/>
                            <img className='logo-desc' src={logoLog}/>
                        </div>
                        <div className='form-div-inputs'>
                            <fieldset>
                                <input placeholder='email' {...register('email')} className='input' />
                                {errors.email && <span className='input--error'>{errors.email.message}</span>}
                            </fieldset>
                            <fieldset>
                                <input placeholder='password' type={view ? 'text' : 'password'} {...register('password')} className='input' />
                                {errors.password && <span className='input--error'>{errors.password.message}</span>}
                                {
                                    view ? <EyeIcon onClick={() => changeIcon()} className='svg--close' /> : <EyeOffIcon onClick={() => changeIcon()} className='svg--open' />
                                }
                            </fieldset>

                        </div>
                        <div className='form-div-btn'>
                            <button id='btn-login' type='submit' >login</button>
                        </div>


                        <div className='form-div-links'>
                            <span>forgot password? <Link to={'/forgot'}>redefine here</Link></span>
                            <span>don't have an account? <Link to='/register'>sign up</Link></span>
                        </div>
                    </form>
                </section>

            </main>
    )
}
export default Login