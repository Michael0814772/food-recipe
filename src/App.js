import './App.css';
import { useState, useEffect } from 'react';
import Recipe from './components/Recipe';
import { v4 as uuidv4} from 'uuid';
import Alert from './components/Alert'

function App() {

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState('');
  const api_key = "2cb6635594mshbc47c5a0e03d5d6p1da89ajsn6d54c4d18446";

  useEffect(() => {
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": api_key
      }
    })
      .then(res => res.json())
      .then(data => {
        setRecipe(data.hits);
        console.log(data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Food Recipes</h1>
      </div>
      <Alert />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Food..."
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipe !== [] && recipe.map((recipes) => <Recipe key={uuidv4()} recipes={recipes}/>)}
      </div>
    </div>
  );
}

export default App;
