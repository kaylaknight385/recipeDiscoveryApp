import React from 'react';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import CategoryCard from '../components/CategoryCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const HomePage = () => {
  const { data, loading, error } = useFetch(api.getCategories());

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-warm-brown-900 mb-2">
            Discover Delicious Recipes
          </h1>
          <p className="text-warm-brown-700 text-lg">
            Browse by category and find your next favorite meal
          </p>
        </div>
        <div className="categories-grid">
          {data?.categories?.map((category) => (
            <CategoryCard
              key={category.idCategory}
              category={{
                name: category.strCategory,
                image: category.strCategoryThumb,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
