import { Link } from "react-router-dom"

const Forgot = () => {
    return(
        <main id='forgot'>
        <section>
            <form>

                <h2>redefine password</h2>
                <input placeholder='email' />
                
                <input placeholder='new password' />
                <button>redefine</button>
                <Link to={'/login'}>{`< back`}</Link>
                
            </form>
        </section>
    </main>
    )
}

export default Forgot