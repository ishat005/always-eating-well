import { Link } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import './LoginUser.scss';

function LoginUser(){
    return(
        <>
            <main>
                <Link to="/" className="home-link">
                    <h1 className="app-title">Always Eating Well</h1>
                </Link>
               
                
                <form className="login">
                    <h3 className="login__heading">Login</h3> 

                    <Input type="text" name="email" label="Email:" className="email" />
                    <Input type="password" name="password" label="Password:" className="password"/>

                   
                    <button className="login__button">
                        Login
                    </button>
                
                    {/* {error && <div className="login__message">{error}</div>} */}
                </form>

                <div className="message-block">
                    <p className="message-block__info">Don't have an account?</p>
                    <p className="message-block__register">
                        <Link to="/users/register" className="register-link">Register Instead</Link>
                    </p>
                </div>
            </main>
        </>
    )
}

export default LoginUser;