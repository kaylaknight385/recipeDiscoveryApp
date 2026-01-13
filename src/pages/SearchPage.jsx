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
    <div className="search-page">
      <h1>Search Results</h1>
      {query && <p>Searching for: {query}</p>}
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
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
