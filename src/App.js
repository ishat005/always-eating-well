import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AddRecipe from './Pages/AddRecipe/AddRecipe';
import SelectedRecipe from './Components/SelectedRecipe/SelectedRecipe';
import RegisterUser from './Pages/RegisterUser/RegisterUser';
import LoginUser from './Pages/LoginUser/LoginUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
          <Route path="/recipes/:id" element={<SelectedRecipe/>} />
          <Route path="/users/register" element={<RegisterUser />} />
          <Route path="/users/login" element={<LoginUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
