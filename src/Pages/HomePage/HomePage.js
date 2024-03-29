import Header from '../../Components/Header/Header.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './HomePage.scss';
import axios from "axios";
const API_URL  = "http://localhost:8080/recipes";

const HomePage = () => {
    const [recipe, setRecipe] = useState(null);

    const getRecipes = async () => {
        try {
          const response = await axios.get(
            `${API_URL}`
          );
          setRecipe(response.data);
        } catch (error) {
          console.log("Error", error);
        }
    }; 

    useEffect(() => {
        getRecipes();
      }, []);
    
      if (!recipe) {
        return <div>Loading...</div>;
      }

    return(
        <>
            <Header />
            <div className="recipes-container">
                <div className="recipes-container__search">
                  <input type="text" placeholder="Search a recepi" id="input"/>
                </div>
                <h2 className="recipes-container__heading">RECIPES</h2>

              {/* <Link to='/users/login' className={'add-new-recipe'}>
                Add new recipe
              </Link> */}

                <Link to="/users/login">
                    <button className="add-recipe">
                        Add new recipe
                    </button>
                </Link>

                {
                    recipe.map((recipe) => {
                        return(
                          <div>
                            <div className="content-container">
                                <div className="content-container__left">
                                    <img src={recipe.image} alt="dish-image"/>
                                </div>
                                <div className="content-container__right">
                                    <h1 className="recipe-name">{recipe.name}</h1>
                                    <p className="recipe-description">{recipe.description}
                                        <p>
                                          <div key={recipe.id}>
                                            <Link to={`/recipes/${recipe.id}`} className="link" >
                                                CONTINUE READING
                                            </Link>
                                          </div>
                                        </p>
                                    </p>
                                </div>
                            </div>
                          </div>
                        )
                    })
              } 
            </div>
        </>
    )
}

export default HomePage;