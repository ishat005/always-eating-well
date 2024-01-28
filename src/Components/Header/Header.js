import './Header.scss';

function Header(){
    return(
        <>
            <div className="header">
                <h1>Always Eating Well</h1>
                <div className="right-nav">
                    <h3>Recipes</h3>
                    <h3>Login</h3>
                </div>
            </div>

        <div className="search">
            <input type="text" placeholder="Search a recepi" id="input"/>
        </div>
        </>
    )
}

export default Header;