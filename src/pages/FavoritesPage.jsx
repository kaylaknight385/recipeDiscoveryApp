import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>My Favorites ❤️</h1>
      </div>
      {favorites.length > 0 ? (
        <div className="recipes-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <div className="no-favorites-icon">🍽️</div>
          <h2>No favorites yet</h2>
          <p>Start exploring recipes and save your favorites!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
