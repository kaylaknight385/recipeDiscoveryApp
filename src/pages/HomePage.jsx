import React from 'react';
import useFetch from '../hooks/useFetch';
import api from '../utils/api';
import CategoryCard from '../components/CategoryCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import './HomePage.css';

const HomePage = () => {
  const { data, loading, error } = useFetch(api.getCategories());

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Discover Delicious Recipes</h1>
        <p>Browse by category and find your next favorite meal</p>
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
  );
};

export default HomePage;
