import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AddRecipe from './Pages/AddRecipe/AddRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
