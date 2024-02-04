import { useNavigate, Link } from 'react-router-dom';
import './LoginUser.scss';
import axios from "axios";
import { useState } from "react";
const API_URL = 'http://localhost:8080/user';

function LoginUser(){
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

		try {
			const response = await axios.post(`${API_URL}/login`, {
				email: event.target.email.value,
				password: event.target.password.value,
			})
			console.log(response.data);
			sessionStorage.setItem('token', response.data.token)
			navigate('/recipe/add')
			
		} catch(error) { 
			setError("Please provide valid credentials");	
		}
    }

    return(
        <main>
            <Link to="/" className="home-link">
                <h1 className="app-title">Always Eating Well</h1>
            </Link>
                 
            <form className="login-user" onSubmit={handleSubmit}>
                <h3 className="login-user__heading">Login</h3> 

                <label className="login-email">Email:</label>
                <input type="text" name="email" className="email" />
                    
                <label className="login-password">Password</label>
                <input type="password" name="password" className="password"/>
                   
                <button className="login-user__button">
                    Login
                </button>
                
                {error && <div className="login__message">{error}</div>}
            </form>

            <div className="message-block">
                <p className="message-block__info">Don't have an account?</p>
                <p className="message-block__register">
                    <Link to="/users/register" className="register-link">Register Instead</Link>
                </p>
            </div>
        </main>
    )
}

export default LoginUser;