import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, loading, error } = useFetch(query ? api.searchMeals(query) : null);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-warm-brown-900 mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-warm-brown-700 text-lg mb-6">
            Showing results for: <span className="font-semibold">"{query}"</span>
          </p>
        )}
        <div className="recipes-grid">
          {data?.meals ? (
            data.meals.map((meal) => (
              <RecipeCard
                key={meal.idMeal}
                recipe={{
                  id: meal.idMeal,
                  title: meal.strMeal,
                  image: meal.strMealThumb,
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-2xl text-warm-brown-600">No recipes found</p>
              <p className="text-warm-brown-500 mt-2">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
