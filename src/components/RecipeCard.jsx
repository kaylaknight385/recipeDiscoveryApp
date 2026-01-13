import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-warm-brown-900 mb-2 line-clamp-2">
          {recipe.title}
        </h3>
        <Link 
          to={`/recipe/${recipe.id}`}
          className="inline-block mt-2 px-4 py-2 bg-warm-brown-600 text-white rounded-lg hover:bg-warm-brown-700 transition"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
