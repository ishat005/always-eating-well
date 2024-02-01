import Header from "../../Components/Header/Header";
import BackArrow from '../../Assets/Icons/back-arrow.png';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './AddRecipe.scss';

function AddRecipe(){
    const [recipeData, setRecipeData] = useState({
        name: "",
        category: "",
        ingredients: "",
        description: "",
        procedure: "",
        image: ""
    });

    const navigate = useNavigate();

      const addRecipeDetails = async (e) => {
        e.preventDefault();
    
        try {
          const addedItem = {
            name: recipeData.name,
            category: recipeData.category,
            ingredients: recipeData.ingredients,
            description: recipeData.description,
            procedure: recipeData.procedure,
            image: recipeData.image,
          };
    
          const response = await axios.post(
            `http://localhost:8080/recipes`,
            addedItem
          );

          setRecipeData({
            name: response.data[0].name,
            description: response.data[0].category,
            category: response.data[0].ingredients,
            description: response.data[0].description,
            procedure: response.data[0].procedure,
            image: response.data[0].image,
          });
          navigate("/");
        }catch (error) {
            console.log("Error", error);
          }
      }

    const handleInputChange = (event) => {
        setRecipeData({
          ...recipeData,
          [event.target.name]: event.target.value,
        });
    };

    if (!recipeData) {
        return <div>Loading...</div>;
      }

    return(
        <>
            <Header />
            <Link to="/">
                    <button className="view-all-recipes">
                        <img src={BackArrow} width="30" height="25"/>
                        VIEW RECIPES
                    </button>
            </Link>

            <h3 className="add-recipe-heading">ADD NEW RECIPE</h3>

            <form 
                className="submit-recipe"
                onSubmit={(e) => {
                    addRecipeDetails(e);
                }}
            >
                <label className="dish-name">Dish Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="dish-input"
                    value={recipeData.name}
                    onChange={handleInputChange}
                />

                <label className="dish-category">Category</label>
                <input 
                    type="text" 
                    name="category" 
                    className="dish-category"
                    value={recipeData.category}
                    onChange={handleInputChange}
                />

                <label className="dish-ingredients">Ingredients</label>
                <input 
                    type="text" 
                    name="ingredients" 
                    className="dish-ingredients"
                    value={recipeData.ingredients}
                    onChange={handleInputChange}
                />

                <label className="dish-description">Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    className="dish-description"
                    value={recipeData.description}
                    onChange={handleInputChange}
                />

                <label className="dish-procedure">Procedure</label>
                <textarea 
                    type="text" 
                    name="procedure" 
                    className="dish-procedure"
                    value={recipeData.procedure}
                    onChange={handleInputChange}
                />

                <label className="dish-image">Image</label>
                <input 
                    type="file" 
                    id="image" 
                    name="image" 
                    className="dish-image" 
                    accept="image/*" 
                    value={recipeData.image}
                    onChange={handleInputChange}
                />
                
              <button type="submit" className="submit-form">Submit</button> 
            </form>
        </>
    )
}


export default AddRecipe;