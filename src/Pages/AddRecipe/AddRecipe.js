import Header from "../../Components/Header/Header";
import BackArrow from '../../Assets/Icons/back-arrow.png';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './AddRecipe.scss';
const API_URL = 'http://localhost:8080/recipes';

function AddRecipe(){
    const [user, setUser] = useState(null);
	const [failedAuth, setFailedAuth] = useState(false);

	useEffect(() => {
		// getItem from sessionStorage token
		const token = sessionStorage.getItem('token')

		// If theres not a token then setFailedAuth to true and return 
		if(!token){
			setFailedAuth(true)
		}

		// Otherwise we will check to see if the current user is authorized to be on this dashboard
		// Make a get request to "http://localhost:8080/user/current"
		const authorizeUser = async () => {
			// Pass Headers on this request 
			// use the Authorization key to pass a Bearer token
			// Use string interpolation to pass `Bearer ${token}` as value for authorization
			// On successful response setUser to response.data
			// On failure setFailed auth to true
			try {
				const response = await axios.get('http://localhost:8080/user/current', {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				})
				setUser(response.data)

			} catch(error) { 
				console.log(error);
				setFailedAuth(true)
			}
		}
		authorizeUser()

		axios
			.get("http://localhost:8080/user", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((response) => {
			console.log('user auth', response);
		})
		.catch((error) => {
			console.log(error);
		});
	}, []);

    
    const handleLogout = () => {
		sessionStorage.removeItem("token");
		setUser(null);
		setFailedAuth(true);
	};

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
            `${API_URL}`,
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

    if (failedAuth) {
		return (
			<main>
				<p>You must be logged in to see this page.</p>
				<p>
					<Link to="/users/login">Log in</Link>
				</p>
			</main>
		);
	}

    if (user === null && !recipeData) {
		return (
			<main>
				<p>Loading...</p>
			</main>
		);
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

            <Link to="/users/login">
                <button className="logout-button"  onClick={handleLogout}>
                    Logout
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