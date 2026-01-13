import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
