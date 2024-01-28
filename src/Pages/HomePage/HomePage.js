import Header from '../../Components/Header/Header.js';
import { Link } from 'react-router-dom';
import './HomePage.scss';


function HomePage(){
    return(
        <>
        <Header />
        <div className="recipes-container">
            <h2 className="recipes-container__heading">RECIPES</h2>
            <Link to="/recipe/add">
              <button className="recipes-container__add-recipe">Add new recipe</button>
            </Link>
        </div>
        </>
    )
}

export default HomePage;