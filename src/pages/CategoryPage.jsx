import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(api.filterByCategory(category));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category} Recipes</h1>
      </div>
      <div className="recipes-grid">
        {data?.meals?.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            recipe={{
              id: meal.idMeal,
              title: meal.strMeal,
              image: meal.strMealThumb,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
