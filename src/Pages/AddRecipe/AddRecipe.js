import Header from "../../Components/Header/Header";
import BackArrow from '../../Assets/Icons/back-arrow.png';
import { Link } from "react-router-dom";
import './AddRecipe.scss';

function AddRecipe(){
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

            <form className="submit-recipe">
                <label className="dish-name">Dish Name</label>
                <input type="text" name="dish-name" className="dish-input"/>

                <label className="dish-category">Category</label>
                <input type="text" name="dish-category" className="dish-category"/>

                <label className="dish-ingredients">Ingredients</label>
                <input type="text" name="dish-ingredients" className="dish-ingredients"/>

                <label className="dish-description">Description</label>
                <textarea type="text" name="dish-description" className="dish-description"/>

                <label className="dish-procedure">Procedure</label>
                <textarea type="text" name="dish-procedure" className="dish-procedure"/>

                <label className="dish-image">Image</label>
                <input type="file" id="img" name="img" className="dish-image" accept="image/*" />

                <input type="submit" className="submit-form"/>
            </form>
        </>
    )
}

export default AddRecipe;