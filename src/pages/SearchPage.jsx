import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import './SearchPage.css';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data, loading, error } = useFetch(query ? api.searchMeals(query) : null);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Results</h1>
        {query && (
          <p className="search-query">
            Showing results for: <span>"{query}"</span>
          </p>
        )}
      </div>
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
          <div className="no-results">
            <p>No recipes found</p>
            <p>Try searching with different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
