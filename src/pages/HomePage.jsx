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
    <div className="home-page">
      <h1>Recipe Categories</h1>
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
