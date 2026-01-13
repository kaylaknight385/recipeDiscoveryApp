import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="recipes-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No favorites yet. Start adding some recipes!</p>
      )}
    </div>
  );
};

export default FavoritesPage;
