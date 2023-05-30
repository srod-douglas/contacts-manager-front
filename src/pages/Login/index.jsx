import { useContext } from 'react'
import { ClientContext } from '../../contexts/client';
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaLogin } from '../../components/Validators/SchemaLogin'
import { useForm } from 'react-hook-form';

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
            <main id='login'>
                <section>
                    <form noValidate onSubmit={handleSubmit(submit)}>

                        <h2>Clients Manager</h2>

                        <input placeholder='email' {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}

                        <input placeholder='password' {...register('password')} />
                        {errors.password && <span>{errors.password.message}</span>}

                        <button type='submit'>login</button>
                        <span>forgot <Link to={'/forgot'}>password?</Link></span>
                        <span>don't have an account? <Link to='/register'>sign up</Link></span>
                        
                    </form>
                </section>
            </main>
        </>
    )
}
export default Login