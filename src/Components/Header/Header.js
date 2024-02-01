import './Header.scss';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="header">
                <h1>Always Eating Well</h1>
                <div className="right-nav">
                    <Link to="/" className="login-link">
                        <h3>Recipes</h3> 
                    </Link>

                    <Link to="/users/login" className="login-link">
                        <h3>Login</h3> 
                    </Link>
                </div>
            </div>

        {/* <div className="search">
            <input type="text" placeholder="Search a recepi" id="input"/>
        </div> */}
        </>
    )
}

export default Header;