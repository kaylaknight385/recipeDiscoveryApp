import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import { useFavorites } from '../context/FavoritesContext';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

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
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold text-warm-brown-900">
                {meal.strMeal}
              </h1>
              <button 
                onClick={handleFavoriteToggle}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  isFavorite(meal.idMeal)
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-warm-brown-600 hover:bg-warm-brown-700 text-white'
                }`}
              >
                {isFavorite(meal.idMeal) ? '❤️ Saved' : '🤍 Save'}
              </button>
            </div>
            
            <div className="flex gap-4 mb-6">
              <span className="px-4 py-2 bg-warm-brown-100 text-warm-brown-800 rounded-full font-semibold">
                {meal.strCategory}
              </span>
              <span className="px-4 py-2 bg-warm-brown-100 text-warm-brown-800 rounded-full font-semibold">
                {meal.strArea}
              </span>
            </div>

            <div className="border-t border-warm-brown-200 pt-6">
              <h2 className="text-2xl font-bold text-warm-brown-900 mb-4">
                Instructions
              </h2>
              <p className="text-warm-brown-800 leading-relaxed whitespace-pre-line">
                {meal.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
