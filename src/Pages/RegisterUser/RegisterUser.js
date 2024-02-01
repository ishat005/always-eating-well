import { Link } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import './RegisterUser.scss';

function RegisterUser(){
    return(
        <>
         <main>
                <Link to="/" className="home-link">
                    <h1 className="app-title">Always Eating Well</h1>
                </Link>
               
                
                <form className="register">
                    <h3 className="register__heading">Register</h3> 

                    <Input type="text" name="email" label="Email:" className="email" />
                    <Input type="password" name="password" label="Password:" className="password"/>

                   
                    <button className="register__button">
                        Register
                    </button>
                  

                {/* {error && <div className="login__message">{error}</div>} */}
            </form>

            <div className="message-block">
                <p className="message-block__info">Already have an account?</p>
                <p className="message-block__login">
                    <Link to="/users/login" className="login-link">Sign in instead</Link>
                </p>
            </div>

            </main>
        
        </>
    )
}

export default RegisterUser;