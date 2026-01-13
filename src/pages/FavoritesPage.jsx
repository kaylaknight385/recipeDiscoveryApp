import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-warm-brown-900 mb-6">
          My Favorites ❤️
        </h1>
        {favorites.length > 0 ? (
          <div className="recipes-grid">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <span className="text-6xl mb-4 block">🍽️</span>
            <p className="text-2xl text-warm-brown-700 font-semibold mb-2">
              No favorites yet
            </p>
            <p className="text-warm-brown-600">
              Start exploring recipes and save your favorites!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
