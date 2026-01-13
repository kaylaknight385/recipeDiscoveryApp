import React from 'react';
import { Link } from 'react-router-dom';

// reusable recipe card component
const RecipeCard = ({ recipe, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
  >
    <img 
      src={recipe.strMealThumb} 
      alt={recipe.strMeal}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg truncate">{recipe.strMeal}</h3>
      {recipe.strCategory && (
        <p className="text-sm text-gray-600 mt-1">{recipe.strCategory}</p>
      )}
    </div>
  </div>
);

export default RecipeCard;
