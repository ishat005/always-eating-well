import { useNavigate, Link } from 'react-router-dom';
import './RegisterUser.scss';
import axios from "axios";
import { useState } from "react"; 
const API_URL = 'http://localhost:8080/user'


function RegisterUser(){
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post(`${API_URL}/register`, {
                email: event.target.email.value,
                password: event.target.password.value,
            })
    
            if(response) {
                setSuccess(true);
                event.target.reset();
                alert("Registered Successfully");
                navigate('/users/login');
            }	
            setError("");
            event.target.reset();

            if(setError(true)){
                setSuccess(false);
            }
		} catch(error) { 
			setError("Please enter all required fields and valid unique email and a password!");		
		}
	}
    
    return(
        <main>
            <Link to="/" className="home-link">
                <h1 className="app-title">Always Eating Well</h1>
            </Link>
                       
            <form className="register-user" onSubmit={handleSubmit}>
                <h3 className="register__heading">Register</h3> 
            
                <label className="register-email">Email:</label>
                <input type="text" name="email" className="email" />
            
                <label className="register-password">Password:</label>                 
                <input type="password" name="password" className="password"/>
                       
                <button className="register__button">
                    Register
                </button>    

                  {error && <div className="register__message">{error}</div>}           
            </form>
        
             <div className="message-block">
                <p className="message-block__register-info">Already have an account?</p>
                <p className="message-block__login-info">
                    <Link to="/users/login" className="signin-link">Sign in instead</Link>
                </p>
            </div>
        </main>
    )
}

export default RegisterUser;