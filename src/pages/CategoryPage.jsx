import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const CategoryPage = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(api.filterByCategory(category));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-warm-brown-900 mb-6">
          {category} Recipes
        </h1>
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
    </div>
  );
};

export default CategoryPage;
