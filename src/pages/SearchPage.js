import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = ({ query, onRecipeClick, onBack }) => {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-pink-600 text-white rounded hover:bg-red-700"
      >
        Back
      </button>
      <h2 className="text-3xl font-bold mb-6">Search Results for "{query}"</h2>
      {!data?.meals || data.meals.length === 0 ? (
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <Search size={64} className="mx-auto mb-4 text-gray-400" />
          <p className="text-xl text-gray-600">No recipes found</p>
          <p className="text-gray-500 mt-2">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.meals.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe.idMeal)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
