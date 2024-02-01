import Header from "../../Components/Header/Header";
import BackArrow from '../../Assets/Icons/back-arrow.png';
import { Link } from "react-router-dom";
import './AddRecipe.scss';

function AddRecipe(){
    const [recipeData, setRecipeData] = useState({
        dish_name: "",
        dish_category: "",
        dish_ingredients: "",
        dish_description: "",
        dish_procedure: "",
        dish_img: ""
      });

      const addRecipeDetails = async (e) => {
        e.preventDefault();
    
        try {
          const addedItem = {
            name: recipeData.dish_name,
            category: recipeData.dish_category,
            ingredients: recipeData.dish_ingredients,
            description: recipeData.dish_description,
            image: recipeData.dish_img,
            procedure: recipeData.dish_procedure
          };
    
          const response = await axios.post(
            `http://localhost:8080/recipes`,
            addedItem
          );

          setRecipeData({
            dish_name: response.data[0].name,
            dish_description: response.data[0].category,
            dish_category: response.data[0].ingredients,
            dish_description: response.data[0].description,
            dish_img: response.data[0].image,
            dish_procedure: response.data[0].procedure,
          });

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
                    name="dish-name" 
                    className="dish-input"
                    value={recipeData.dish_name}
                    onChange={handleInputChange}
                />

                <label className="dish-category">Category</label>
                <input 
                    type="text" 
                    name="dish-category" 
                    className="dish-category"
                    value={recipeData.dish_category}
                    onChange={handleInputChange}
                />

                <label className="dish-ingredients">Ingredients</label>
                <input 
                    type="text" 
                    name="dish-ingredients" 
                    className="dish-ingredients"
                    value={recipeData.dish_ingredients}
                    onChange={handleInputChange}
                />

                <label className="dish-description">Description</label>
                <textarea 
                    type="text" 
                    name="dish-description" 
                    className="dish-description"
                    value={recipeData.dish_description}
                    onChange={handleInputChange}
                />

                <label className="dish-procedure">Procedure</label>
                <textarea 
                    type="text" 
                    name="dish-procedure" 
                    className="dish-procedure"
                    value={recipeData.dish_procedure}
                    onChange={handleInputChange}
                />

                <label className="dish-image">Image</label>
                <input 
                    type="file" 
                    id="img" 
                    name="img" 
                    className="dish-image" 
                    accept="image/*" 
                    value={recipeData.dish_img}
                    onChange={handleInputChange}
                />

                <input type="submit" className="submit-form"/>
            
            </form>
        </>
    )
}


export default AddRecipe;