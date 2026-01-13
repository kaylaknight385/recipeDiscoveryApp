import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import { useFavorites } from '../context/FavoritesContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(api.getMealById(id));
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const meal = data?.meals?.[0];
  if (!meal) return <ErrorMessage message="Recipe not found" />;

  const handleFavoriteToggle = () => {
    if (isFavorite(meal.idMeal)) {
      removeFavorite(meal.idMeal);
    } else {
      addFavorite({
        id: meal.idMeal,
        title: meal.strMeal,
        image: meal.strMealThumb,
      });
    }
  };

  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-container">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="recipe-detail-image"
        />
        <div className="recipe-detail-content">
          <div className="recipe-detail-header">
            <h1>{meal.strMeal}</h1>
            <button 
              onClick={handleFavoriteToggle}
              className={`favorite-button ${isFavorite(meal.idMeal) ? 'saved' : 'not-saved'}`}
            >
              {isFavorite(meal.idMeal) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          
          <div className="recipe-tags">
            <span className="recipe-tag">{meal.strCategory}</span>
            <span className="recipe-tag">{meal.strArea}</span>
          </div>

          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
