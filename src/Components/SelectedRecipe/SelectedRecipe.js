import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import './SelectedRecipe.scss';
import BackArrow from '../../Assets/Icons/back-arrow.png';
const API_URL = "http://localhost:8080/recipes";

const SelectedRecipe = () =>{

    // Get ID from URL
    const params = useParams();
    
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        axios.get(`${API_URL}/${params.id}`)
            .then(res => {
                setRecipes(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [params.id])
    

    return(
        <>
            <Header />
            <div className="buttons-recipe-action">
                <Link to="/">
                    <button className="view-recipes">
                        <img src={BackArrow} width="30" height="25"/>
                        VIEW RECIPES
                    </button>
                </Link>

                <Link to="/users/login">
                    <button className="add-recipe">
                        Add new recipe
                    </button>
                </Link>
            </div>
        
            <div className="content">
                <div className="content__left">
                    <img src={recipes.image} alt="dish-image" className="content__left--dish-image"/>
                </div>

                <div className="content__right">
                    <h1 className="content__right--recipe-name">{recipes.name}</h1>
                    <p className="content__right--recipe-category">{recipes.category}</p>
                    <p className="content__right--recipe-description">{recipes.description}</p>
                </div>
            </div>

            <div className="content-ingredients"> 
                <h3 className="content-ingredients__heading">INGREDIENTS</h3> 
                    <nav className="nav">
                        <ul>
                            <li>{recipes.ingredients}</li>
                        </ul>         
                    </nav>
            </div> 

            <div className="procedure-container">
                    <h3 className="procedure-container__heading">PROCEDURE</h3>
                    <p>{recipes.procedure}</p>
            </div>
        </>
    )
}

export default SelectedRecipe;